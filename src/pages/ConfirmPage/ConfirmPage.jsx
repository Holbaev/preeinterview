import React from "react";
import styles from "./ConfirmPage.module.scss";
import Button from "../../shared/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { confirmUser } from "../../shared/service/AuthService";
import { toast } from "react-toastify";


const ConfirmPage = () => {
  // states 
  const {id} = useParams();
  const navigate = useNavigate();

  // functions

  const handleConfirm = async () =>{
    try{
      const response = await confirmUser(id);
      toast.success("Добро пожаловать.");
      navigate(`/interview/`);
    }catch(err){
      console.log(err);
  }

};
return (
  <div className={styles.confirm_wrapper}>
    <h3 className={styles.comfirm_title}>Сongratulations</h3>
    <p className={styles.confirm_text}>
      You have successfully registered and can start using our project.
    </p>
    <Button onClick={handleConfirm}>Start</Button>
  </div>
);
};

export default ConfirmPage;

