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

  parseNameColor(name, color) {
    let obj = name.replace(/\s/g, '').split('/')
      .concat(this.formatColor(color))
      .reverse()
      .reduce(function (a, b) {
        return { [utils.toCamelCase(b)]: a }
      })
    return obj
  }


  tokens(theme) {
    let colors = {}
    const themeColors = theme.children.filter(item => item.name === 'colors')

    themeColors[0].children.forEach(item => {
      const fill = item.fills[0]

      if (fill.type === 'SOLID') {
        fill.color.a = fill.opacity ? fill.opacity : fill.color.a
        const formatedColor = this.parseNameColor(item.name, fill.color)

        colors = utils.mergeObj(colors, formatedColor)
      }
    })

    return colors
  }
}

module.exports = new Colors()
