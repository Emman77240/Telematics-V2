import axios from 'axios'

const baseURL = 'http://ec2-3-15-8-220.us-east-2.compute.amazonaws.com/api'

export const api = (payload) => {
  return axios.request({
    baseURL,
    ...payload,
  }).catch(({ response: { data, status } }) => {
    const error = new Error();
    error.data = data;
    error.status = status;
    throw error;
  })
}

export const logIn = (data) => {
  return api({
    method: 'POST',
    url: '/login/',
    data,
  })
}
