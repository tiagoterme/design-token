const utils = require('./utils')

class Colors {
  parseColor(value) {
    return parseInt(Math.round(value * 255))
  }

  parseAlpha(value) {
    return parseFloat(value.toFixed(2))
  }

  formatColor(color) {
    return `rgba(${this.parseColor(color.r)},${this.parseColor(color.g)},${this.parseColor(color.b)},${this.parseAlpha(color.a)})`
  }

  tokens(theme) {
    const colors = {}
    const themeColors = theme.children.filter(item => item.name === 'colors')

    themeColors[0].children.forEach(item => {
      const fill = item.fills[0]

      if (fill.type === 'SOLID') {
        fill.color.a = fill.opacity ? fill.opacity : fill.color.a

        colors[utils.toCamelCase(item.name)] = this.formatColor(fill.color)
      }
    })

    return colors
  }
}

module.exports = new Colors()
