import { action, thunk } from 'easy-peasy'
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

/**
 * initialState: {
 * @param {Boolean} isLoading
 * @param {Boolean} isError
 * @param {String} errorMessage
 * @param {Array, Object} items
 * }
 */
const AddData = {
  initialState: {
    isLoading: true,
    isError: false,
    errorMessage: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.errorMessage = payload
    state.initialState.isLoading = false
  }),

  fetchError: action((state, payload) => {
    state.initialState.isLoading = true
    state.initialState.isError = true
    state.initialState.errorMessage = payload
  }),

  postAddData: thunk(async (actions, payload) => {
    let body = [
      {
        uuid: uuidv4(),
        komoditas: payload.commodity,
        area_provinsi: payload.province,
        area_kota: payload.city,
        size: payload.size,
        price: payload.price,
        tgl_parsed: String(new Date().toJSON()),
        timestamp: String(new Date().valueOf()),
      },
    ]
    try {
      const { status, statusText } = await Axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/lists`,
        data: body,
      })
      if (status !== 200) {
        actions.fetchError(statusText)
      } else {
        actions.fetchAction(statusText)
      }
    } catch (error) {
      actions.fetchError(error.response.statusText)
    }
  }),
}

export default AddData
