import axios from "axios"

class ApiAuth {
  constructor() {
    this.baseURL = 'login'
  }

  signIn(data) {
    return axios.post(`${this.baseURL}/sign-in`, data)
  }

  signUp(data) {
    return axios.post(`${this.baseURL}/sign-up`, data)
  }

  validate(id) {
    return axios.get(`${this.baseURL}/${id}`)
  }
}

export const apiAuth = new ApiAuth()