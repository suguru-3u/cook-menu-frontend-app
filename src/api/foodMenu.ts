/**
 * このファイル内では料理レシピに関するAPI通信を記述している
 */

import axios from 'axios'
import { type cookMenuRequest } from '../model/cookMenu'

const apiBaseURL = import.meta.env.VITE_API_BASE_URL
const timeout = 5000

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const foodMenuLists = async () => {
  try {
    const url = 'api/users'
    await wait(1500)
    const responce = await axios.get(url, { baseURL: apiBaseURL, timeout: timeout })
    return responce.data
  } catch (e: any) {
    console.log('エラー発生', e)
    return []
  }
}

const registerCookMenu = async (params: cookMenuRequest) => {
  try {
    const url = 'api/users'
    await wait(1750)
    const responce = await axios.post(url, params, { baseURL: apiBaseURL, timeout: timeout })
    return responce.status
  } catch (e: any) {
    console.log('エラー発生', e)
    return e
  }
}

export { foodMenuLists, registerCookMenu }
