import React from "react";
import styles from "./Button.module.scss";
import { motion } from "framer-motion"

const Button = ({ childer, ...props }) => {
  return (
    <motion.button
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      className={styles.btn}
      {...props}
    ></motion.button>
  );
};

export default Button;
