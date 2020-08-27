import { GET_INIT_DATA } from './index'
import requests from '../requests'

export const getInitData = () => async dispatch => {
  try {
    const response = await requests.getInitData()

    return dispatch({
      type: GET_INIT_DATA,
      payload: response
    })
  } catch (e) {
    console.error(e)
  }

}
