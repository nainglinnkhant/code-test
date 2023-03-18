import { useQuery } from '@tanstack/react-query'

import { Post } from '../../components'
import { getPosts } from '../../api'
import styles from './Posts.module.scss'

const Posts = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Something went wrong!</p>

  return (
    <div className={styles.container}>
      <div className={styles['posts-container']}>
        {data.data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
