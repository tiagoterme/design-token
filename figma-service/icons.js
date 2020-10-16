const Axios = require('axios')
const Fs = require('fs-extra')
const Api = require('./api')
const Utils = require('./utils')

class Icons {
  constructor () {
    this.themePath = null
  }

  async getIcons(themeIcons) {
    const iconsId = themeIcons.map((i) =>  i.id)
    const { images } = await Api.getImages(iconsId)
    const icons = {}

    themeIcons.forEach((i) => icons[i.name] = { id: i.id, temp_url: images[i.id], path: `${this.path}/${i.name}.svg`})

    return icons
  }

  downloadIcons(icons) {
    Fs.ensureDir(this.path)

    Object.keys(icons).forEach(async key => {
      const { data } = await Axios({url: icons[key].temp_url, method: 'GET', responseType: 'stream'})
      const file = Fs.createWriteStream(icons[key].path)

      data.pipe(file)
    })

  }

  async tokens(theme){
    this.path = `./src/theme/${theme.name}/icons`
    const themeIcons = theme.children.filter(item => item.name === 'icons') || null
    if (themeIcons.length) {
      const icons = await this.getIcons(themeIcons[0].children)
      this.downloadIcons(icons)

      return icons
    }
  }
}

module.exports = new Icons()
