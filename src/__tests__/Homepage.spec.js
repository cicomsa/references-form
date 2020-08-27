
import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import Homepage from '../components/Homepage'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({})

describe('Homepage', () => {
  it('should return component with correct title value', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Homepage />
      </Provider>
    )
    expect(wrapper.find('.title').text()).toBe('Homepage')
  })
})
