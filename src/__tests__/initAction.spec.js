import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import { getInitData } from '../actions/init'
import { GET_INIT_DATA } from '../actions'
import requests from '../requests'
import mockData from './mockData.json'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios')

describe('getInitData', () => {
  it('should call the getInitData action', async () => {
    axios.get.mockResolvedValue({ data: mockData.init })
    const initData = await requests.getInitData()

    const mockGetInitData = [{
      type: GET_INIT_DATA,
      payload: initData
    }]

    const store = mockStore({ init: [] })

    return store.dispatch(getInitData()).then(() => {
      expect(store.getActions()).toEqual(mockGetInitData)
    })
  })
})

