const axios = require('axios')

class Api {
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

  async getImages(images) {
    try {
      const { data } = await this.apiFigma.get(`/images/${this.fileId}/?ids=${images.join(',')}&format=svg`)
      return await data
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new Api()
