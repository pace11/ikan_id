import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export const PostUpdate = async (params) => {
  let body = {
    condition: { uuid: params.uuid },
    set: {
      komoditas: params.komoditas,
      area_kota: params.area_kota,
      area_provinsi: params.area_provinsi,
      size: params.size,
      price: params.price,
    },
  }
  try {
    const { status, statusText } = await Axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}/list`,
      data: body,
    })
    if (status !== 200) {
      return {
        status: status,
        message: statusText,
      }
    }
    return {
      status: status,
      message: statusText,
    }
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.statusText,
    }
  }
}

export const PostAdd = async (params) => {
  let body = [
    {
      uuid: uuidv4(),
      komoditas: params.commodity,
      area_provinsi: params.province,
      area_kota: params.city,
      size: params.size,
      price: params.price,
      tgl_parsed: String(new Date().toJSON()),
      timestamp: String(new Date().valueOf()),
    },
  ]
  try {
    const { status, statusText } = await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}/list`,
      data: body,
    })
    if (status !== 200) {
      return {
        status: status,
        message: statusText,
      }
    }
    return {
      status: status,
      message: statusText,
    }
  } catch (error) {
    return {
      status: error.response.status,
      message: error.response.statusText,
    }
  }
}
