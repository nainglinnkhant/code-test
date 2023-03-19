import { useDeferredValue, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchKeyword } from '../../store/posts/postsSlice'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const dispatch = useDispatch()

  const [keyword, setKeyword] = useState<string>('')

  const deferredKeyword = useDeferredValue(keyword)

  // This effect will ran immediately as no intensive calculation is needed to make the update
  useEffect(() => {
    dispatch(setSearchKeyword(deferredKeyword))
  }, [deferredKeyword, dispatch])

  return (
    <input
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      placeholder='Search Posts...'
      className={styles['search-bar']}
    />
  )
}

export default SearchBar
