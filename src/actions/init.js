import { GET_INIT_DATA } from './index'
import requests from '../requests'

export const getInitData = () => async dispatch => {
  const response = await requests.getInitData()

  return dispatch({
    type: GET_INIT_DATA,
    payload: response
  })
}
