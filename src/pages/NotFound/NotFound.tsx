import { Link } from 'react-router-dom'

import notFound from '../../assets/not-found.png'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <img src={notFound} alt='Not Found' />

      <h2>Page Not Found!</h2>

      {/* prettier-ignore */}
      <p>Click <Link to='/' replace>here</Link> to go back to home page.</p>
    </div>
  )
}

export default NotFound
