import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { Comments, Error, LoadingSpinner } from '../../components'
import { getPost } from '../../api'
import styles from './PostDetail.module.scss'

const PostDetail = () => {
  const params = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', params.id],
    queryFn: () => getPost(params.id!),
  })

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error />

  const { title, body } = data

  return (
    <div className={styles.container}>
      <div className={styles['post-detail']}>
        <h2>{title}</h2>
        <p>{body}</p>

        <Comments />
      </div>
    </div>
  )
}

export default PostDetail
