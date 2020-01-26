import _ from 'lodash'
import { READ_EVENTS, CREATE_EVENT, GET_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.res.data, 'id')
    case CREATE_EVENT:
    case GET_EVENT:
    case UPDATE_EVENT:
      const { data } = action.res
      return { ...events, [data.id]:data }
    case DELETE_EVENT:
      delete events[action.res.data.id]
      return { ...events }
    default:
      return events
  }
}
