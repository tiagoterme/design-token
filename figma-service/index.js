const axios = require('axios')
const fs = require('fs-extra')
const colors = require('./colors')
const typography = require('./typography')

class FigmaService {
  constructor() {
    //https://www.figma.com/file/OaUQSRCtQaheYyxKxHlUWE/Style-guide?node-id=32%3A0
    this.fileId = 'OaUQSRCtQaheYyxKxHlUWE'
    this.apiFigma = axios.create({
      baseURL: 'https://api.figma.com/v1',
      headers: {
        'X-Figma-Token': '61143-4a7003c1-026a-4cb6-9eb3-3498f9cc2a89'
      }
    })
  }

  async getFile() {
    try {
      const { data } = await this.apiFigma.get(`/files/${this.fileId}`)
      return await data
    } catch (err) {
      console.log(err)
    }
  }

  async getThemes() {
    const { document } = await this.getFile()
    const themes = await document.children.filter(item => {
      return item.name.includes('theme')
    })

    return themes
  }

  writeTheme(themes) {
    themes.forEach(theme => {
      const themeFile = {}
      themeFile.title = theme.name.replace(/\s/g, '')
      themeFile.colors = colors.tokens(theme)
      themeFile.typography = typography.tokens(theme)

      fs.outputJsonSync(`./src/styles/${themeFile.title}.json`, themeFile)
    })
  }

  syncTheme() {
    this.getThemes().then(themes => {
      this.writeTheme(themes)
    })
  }
}

const figma = new FigmaService()
figma.syncTheme()
