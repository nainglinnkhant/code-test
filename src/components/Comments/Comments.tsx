import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import CommentItem from '../CommentItem/CommentItem'
import { getPostComments } from '../../api'
import styles from './Comments.module.scss'

const Comments = () => {
  const params = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['comments', params.id],
    queryFn: () => getPostComments(params.id!),
  })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something went wrong!</p>

  return (
    <fieldset className={styles['comments-container']}>
      <legend>Comments</legend>

      {data.data.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </fieldset>
  )
}

export default Comments
