
const fs = require('fs-extra')
const api = require('./api')
const colors = require('./colors')
const typography = require('./typography')
const icons = require('./icons')

class FigmaService {

  async getThemes() {
    const { document } = await api.getFile()
    const themes = await document.children.filter(item => {
      return item.name.includes('theme')
    })

    return themes
  }

  writeTheme(themes) {
    themes.forEach(async theme => {
      const themeFile = {}
      themeFile.name = theme.name.replace(/\s/g, '').replace('theme/', '')
      theme.name = themeFile.name
      themeFile.colors = colors.tokens(theme)
      themeFile.typography = typography.tokens(theme)
      themeFile.icons = await icons.tokens(theme)

      fs.outputJsonSync(`./src/theme/${themeFile.name}/theme.json`, themeFile)
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
