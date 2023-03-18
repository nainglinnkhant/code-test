import type { Comment } from '../../types/types'
import avatar from '../../assets/avatar.svg'
import styles from './CommentItem.module.scss'

const CommentItem = ({ comment }: { comment: Comment }) => {
  const { name, body } = comment

  return (
    <div className={styles.comment}>
      <img src={avatar} alt='User Profile' />

      <div>
        <p className={styles['comment-name']}>{name}</p>
        <p className={styles['comment-body']}>{body}</p>
      </div>
    </div>
  )
}

export default CommentItem
