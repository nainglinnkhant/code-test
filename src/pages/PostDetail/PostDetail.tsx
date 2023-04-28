import { useParams } from 'react-router-dom'
import { useQuery, useQueryClient } from '@tanstack/react-query'

import { Comments, Error, LoadingSpinner } from '../../components'
import { getPost } from '../../api'
import type { Post } from '../../types/types'
import styles from './PostDetail.module.scss'

const PostDetail = () => {
  const params = useParams()
  const queryClient = useQueryClient()

  const postId = Number(params.id)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    initialData: () => {
      return queryClient.getQueryData<Post[]>(['posts'])?.find((post) => post.id === postId)
    },
  })

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error />

  return (
    <div className={styles.container}>
      <div className={styles['post-detail']}>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>

        <Comments />
      </div>
    </div>
  )
}

export default PostDetail
