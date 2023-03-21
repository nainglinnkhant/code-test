import { useQuery } from '@tanstack/react-query'

import { useAppSelector } from '../../app/hooks'
import { Error, LoadingSpinner, Post, SearchBar } from '../../components'
import { getPosts } from '../../api'
import styles from './Posts.module.scss'

const Posts = () => {
  const searchKeyword = useAppSelector((state) => state.posts.searchKeyword)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    select: (data) => {
      return data.data?.filter((post) =>
        post.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    },
  })

  if (isLoading) return <LoadingSpinner />

  if (isError) return <Error />

  return (
    <div className={styles.container}>
      <SearchBar />

      <div className={styles['posts-container']}>
        {data.length === 0 && <p>Posts not found!</p>}

        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Posts
