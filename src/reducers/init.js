import { GET_INIT_DATA } from '../actions'

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_INIT_DATA:
      return [...state, payload]
    default:
      return state
  }
}
