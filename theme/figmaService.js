const axios = require('axios')
const fs = require('fs')

class FigmaService {
  constructor() {
    this.file = 'e4QdD5hqDpNgaOOirG3xay'
    this.themes = []
    this.apiFigma = axios.create({
      baseURL: 'https://api.figma.com/v1',
      headers: {
        'X-Figma-Token': '61143-4a7003c1-026a-4cb6-9eb3-3498f9cc2a89'
      }
    })
  }

  async getFile() {
    try {
      const { data } = await this.apiFigma.get(`/files/${this.file}`)
      return await data
    } catch (err) {
      console.log(err)
    }
  }

  async getThemes() {
    const { document } = await this.getFile()
    const theme = await document.children.filter(item => {
      return item.name.includes('theme')
    })
    this.theme = theme
    this.writeTheme()

    return this.theme
  }

  formatColor(color){
    return `rgba(${color.r*255},${color.g*255},${color.b*255},${color.a})`
  }

  getColors(theme) {
    const colors = {}
    const themeColors = theme.children.filter(item => item.name === 'colors')

    themeColors[0].children.forEach(item =>{
      colors[item.name] = this.formatColor(item.fills[0].color)
    })

    return colors
  }


  writeTheme() {
    this.theme.forEach(theme => {
      const themeFile = {}
      themeFile.title = theme.name
      themeFile.colors = this.getColors(theme)
      console.log(__dirname);

      fs.writeFileSync(`${themeFile.title}.json`, JSON.stringify(themeFile), 'utf8')
    })
  }
}

const figma = new FigmaService()
figma.getThemes().then(theme => {
  // console.log(theme)
})
