import { useDeferredValue, useEffect, useState } from 'react'

import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>('')

  const deferredKeyword = useDeferredValue(keyword)

  useEffect(() => {}, [deferredKeyword])

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
