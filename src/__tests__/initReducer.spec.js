import initReducer from '../reducers/init'
import { GET_INIT_DATA } from '../actions'
import mockData from './mockData.json'

describe('Init reducer', () => {
  it('should return the initial state', () => {
    expect(initReducer(undefined, [])).toEqual([]);
  })
  it('should handle GET_INIT_DATA', () => {
    const data = mockData.init
    const getInitData = {
      type: GET_INIT_DATA,
      payload: data
    }

    expect(initReducer([], getInitData)).toEqual(data);
  })
})
