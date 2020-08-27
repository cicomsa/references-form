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

const data = [
  {
    id: 1,
    body: 'Provident occaecati exc',
    userId: 1,
    title: 'Sunt aut facere repellat provident occaecati exc'
  },
  {
    id: 2,
    title: 'Sunt aut facere repellat',
    body: 'Lorem impsum...',
    userId: 1
  }
]

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

