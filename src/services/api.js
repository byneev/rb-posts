import axios from 'axios'
import { POSTS_API_URL } from '../settings/constants'

export default class APIService {
  static async getPosts(limit = 10, page = 1) {
    const posts = await axios.get(POSTS_API_URL, {
      params: {
        _limit: limit,
        _page: page
      }
    })
    return posts
  }
}