import Axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

/**
 *
 * api to fetch all list from api
 * @return [{}]
 */
export const fetchList = async () => {
  try {
    const { data, status } = await Axios({
      method: 'GET',
      url: `${API_URL}/lists`,
    })
    if (status !== 200) {
      return {
        data: [],
        status: status,
      }
    }
    return {
      data: data.filter((item) => item.uuid),
      status: status,
    }
  } catch (error) {
    return {
      data: [],
      status: error.response.status,
    }
  }
}
