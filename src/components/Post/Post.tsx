import { Link } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import { getPostComments } from '../../api'
import type { Post as PostType } from '../../types/types'
import styles from './Post.module.scss'

const Post = ({ post }: { post: PostType }) => {
  const queryClient = useQueryClient()

  const prefetchComments = () => {
    queryClient.prefetchQuery({
      queryKey: ['posts', post.id, 'comments'],
      queryFn: () => getPostComments(post.id),
    })
  }

  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to={`post/${post.id}`} onMouseEnter={prefetchComments}>
        Read More
      </Link>
    </div>
  )
}

export default Post
