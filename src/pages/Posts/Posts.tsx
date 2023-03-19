import { useQuery } from '@tanstack/react-query'

import { Error, LoadingSpinner, Post, SearchBar } from '../../components'
import { useAppSelector } from '../../hooks'
import { getPosts } from '../../api'
import styles from './Posts.module.scss'

const Posts = () => {
  const searchKeyword = useAppSelector((state) => state.posts.searchKeyword)

  const { data, isLoading, isError } = useQuery({ queryKey: ['posts'], queryFn: getPosts })

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error />

  const matchedPosts = data.data.filter((post) => post.title.includes(searchKeyword))

  return (
    <div className={styles.container}>
      <SearchBar />

      <div className={styles['posts-container']}>
        {matchedPosts.length === 0 && <p>Posts not found!</p>}

        {matchedPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
