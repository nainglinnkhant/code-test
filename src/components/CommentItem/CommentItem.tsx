import { Image } from 'react-skeleton-image'

import type { Comment } from '../../types/types'
import avatar from '../../assets/avatar.svg'
import styles from './CommentItem.module.scss'
import 'react-skeleton-image/dist/index.css'

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { name, body } = comment

  return (
    <div className={styles.comment}>
      <div className={styles['img-container']}>
        <Image src={avatar} alt='User Profile' width={45} height={45} />
      </div>

      <div>
        <p className={styles['comment-name']}>{name}</p>
        <p className={styles['comment-body']}>{body}</p>
      </div>
    </div>
  )
}

export default CommentItem
