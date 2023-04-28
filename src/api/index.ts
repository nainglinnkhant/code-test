import axios from 'axios'

import type { Post, Comment } from '../types/types'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 7000,
})

export const getPosts = async () => {
  const res = await api.get<Post[]>('/posts')
  return res.data
}

export const getPost = async (postId: number) => {
  const res = await api.get<Post>(`/posts/${postId}`)
  return res.data
}

export const getPostComments = async (postId: number) => {
  const res = await api.get<Comment[]>(`posts/${postId}/comments`)
  return res.data
}
