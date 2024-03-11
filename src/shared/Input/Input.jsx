import React from 'react'
import styles from './Input.module.scss'
import { motion } from 'framer-motion'; // Import Framer Motion

const Input = ({...props}) => {
    // states
  return (
    <motion.input
    {...props}
    className={styles.input}
    initial={{opacity: 0 }}
    animate={{opacity:1 }}
    whileInView={{opacity: 1}}
    transition={{ duration: 1, origin: 1 }}
  />
  )
}

export default Input