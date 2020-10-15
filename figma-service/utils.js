class Utils {
  toCamelCase(str) {
    return str.trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  }

  mergeObj (target, source) {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof Object) Object.assign(source[key], this.mergeObj(target[key], source[key]))
    }

    Object.assign(target || {}, source)
    return target
  }
}

module.exports = new Utils
