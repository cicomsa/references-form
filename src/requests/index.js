import axios from 'axios'

const requests = {
  getInitData: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }
}

export default requests
