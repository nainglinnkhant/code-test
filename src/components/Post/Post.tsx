import { Link } from 'react-router-dom'

import type { Post as PostType } from '../../types/types'
import styles from './Post.module.scss'

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to={`post/${post.id}`}>Read More</Link>
    </div>
  )
}

export default Post
