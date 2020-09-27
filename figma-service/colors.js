class Colors {
  parseColor() {

  }
  formatColor(color) {
    return `rgba(${color.r*255},${color.g*255},${color.b*255},${color.a})`
  }

  tokens(theme) {
    const colors = {}
    const themeColors = theme.children.filter(item => item.name === 'colors')

    themeColors[0].children.forEach(item =>{
      colors[item.name] = this.formatColor(item.fills[0].color)
    })

    return colors
  }
}

module.exports = new Colors
