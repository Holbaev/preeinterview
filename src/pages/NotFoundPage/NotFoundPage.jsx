import React from 'react'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.notfound}>
    <p className={styles.notfound_text}>404 | Page is not found</p>
  </div>
  )
}

export default NotFoundPage