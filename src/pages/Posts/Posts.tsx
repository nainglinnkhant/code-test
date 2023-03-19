import { useQuery } from '@tanstack/react-query'

import { Error, LoadingSpinner, Post, SearchBar } from '../../components'
import { getPosts } from '../../api'
import styles from './Posts.module.scss'

const Posts = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error />

  return (
    <div className={styles.container}>
      <SearchBar />

      <div className={styles['posts-container']}>
        {data.data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
