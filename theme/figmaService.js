const axios = require('axios')

class FigmaService {
  constructor() {
    this.file = 'e4QdD5hqDpNgaOOirG3xay'
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
      return data
    } catch (err) {
      console.log(err)
    }
  }
}

const figma = new FigmaService()

console.log(figma.getFile())
