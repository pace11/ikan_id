import { action, thunk } from 'easy-peasy'
import Axios from 'axios'

/**
 * initialState: {
 * @param {Boolean} isLoading
 * @param {Boolean} isError
 * @param {String} errorMessage
 * @param {Array, Object} items
 * }
 */
const ListData = {
  initialState: {
    isLoading: true,
    isError: false,
    errorMessage: null,
    items: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.items = payload
    state.initialState.isLoading = false
  }),

  fetchError: action((state, payload) => {
    state.initialState.isLoading = true
    state.initialState.isError = true
    state.initialState.errorMessage = payload
  }),

  getListData: thunk(async (actions, payload) => {
    try {
      const { data, status, statusText } = await Axios({
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/list`,
      })
      if (status !== 200) {
        actions.fetchError(statusText)
      } else {
        actions.fetchAction(data.filter((item) => item.uuid))
      }
    } catch (error) {
      actions.fetchError(error.response.statusText)
    }
  }),
}

export default ListData
