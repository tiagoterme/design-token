const utils = require('./utils')
const colors = require('./colors')

class Typography {
  formatStyle(font){
     const fontColor = colors.formatColor(font.fills[0].color)


     return {
              fontFamily: font.style.fontFamily,
              fontSize: font.style.fontSize,
              fontWeight: font.style.fontWeight,
              lineHeight: `${parseInt(font.style.lineHeightPx)}px`,
              letterSpacing: `${font.style.letterSpacing}em`,
              textDecoration: font.style.textDecoration ? font.style.textDecoration.toLowerCase() : null,
              color: fontColor
            }
  }

  tokens(theme) {
    const typography = {}
    const themeTypography = theme.children.filter(item => item.name === 'typography') || null

    if (themeTypography.length) {
      themeTypography[0].children.forEach(item => {
        typography[utils.toCamelCase(item.name)] = this.formatStyle(item)
      })
    }

    return typography
  }
}

module.exports = new Typography
