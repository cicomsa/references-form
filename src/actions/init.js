import axios from 'axios'
import { GET_INIT_DATA } from './index'

export const init = () => dispatch => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => dispatch({
      type: GET_INIT_DATA,
      payload: response.data
    }))
    .catch(err => console.log(err))
}
