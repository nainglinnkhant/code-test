import axios from 'axios'

import type { Post, Comment } from '../types/types'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 7000,
})

export const getPosts = () => api.get<Post[]>('/posts')

export const getPost = (postId: string) => api.get<Post>(`/posts/${postId}`)

export const getPostComments = (postId: string) =>
  api.get<Comment[]>(`posts/${postId}/comments`)
