import axios from 'axios'
import requests from '../requests'
import mockData from './mockData.json'

jest.mock('axios')

describe('requests', () => {
  describe('getInitData', () => {
    it('should fetch data with axios and return the correct data', async () => {
      const initData = mockData.init
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: initData }))

      await expect(requests.getInitData()).resolves.toEqual(initData);
    })
    it('returns an error message when axios call fails', async () => {
      const errorMessage = 'Network Error'

      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      )

      await expect(requests.getInitData()).rejects.toThrow(errorMessage);
    })
  })
})
