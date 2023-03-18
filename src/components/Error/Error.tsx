import { useNavigate } from 'react-router'

import error from '../../assets/error.png'
import styles from './Error.module.scss'

interface ErrorProps {
  errorMsg?: string
  refetchFunc?: () => void
}

const Error = (props: ErrorProps) => {
  const navigate = useNavigate()

  const refreshPage = () => navigate(0)

  const { errorMsg = 'Something went wrong!', refetchFunc = refreshPage } = props

  return (
    <div className={styles.error}>
      <img src={error} alt='Error' />

      <h2>{errorMsg}</h2>

      <p>
        Click <span onClick={refetchFunc}>here</span> to try again.
      </p>
    </div>
  )
}

export default Error
