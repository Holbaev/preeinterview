import React, { useState } from "react";
import styles from "./PasswordPage.module.scss";
import ResetForm from "../../entites/ResetForm/ResetForm";


const PasswordPage = () => {
 
  return (
    <div className={styles.confirm_wrapper}>
      <ResetForm/>
    </div>
  );
};

export default PasswordPage;
