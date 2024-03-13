import React, { useState } from "react";
import styles from "./ResetForm.module.scss";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword } from "../../shared/service/AuthService";
import { useForm, FormProvider } from "react-hook-form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import {
  new_password_validation,
  repeat_password_validation,
} from "../../shared/Validations.js";
const ResetForm = () => {
  // states
  const methods = useForm();
  const token = useParams();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  // functions
  const handlePassword = async (user) => {
    try {
      setLoading(true);
      const postData = {
        password: user.password,
      };
      const response = await changePassword(token.id, postData);
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        setDone(true);
      }, 1000);
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  };
  const onSubmit = methods.handleSubmit((data) => {
    if (data["New password"] !== data["Repeat password"]) {
      setWarning(true);
    }else{
        handlePassword(data);
    }
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.form_container}
      >
        {!done ? (
          <div className={styles.confirm}>
            <h3 className={styles.comfirm_title}>Reset Password</h3>
            <p className={styles.confirm_text}>
              Create a new and strong password of more than 8 characters.
            </p>
            <div className={styles.confirm_form}>
              <Input {...new_password_validation} />
              <Input {...repeat_password_validation} />
              {success && (
                <p className="success">
                  <BsFillCheckSquareFill /> Password updated successfully.
                </p>
              )}
              {warning && (
                <p className="warning">
                  <IoWarningOutline /> Password mismatch.
                </p>
              )}
            </div>
            {!loading ? (
              <Button onClick={onSubmit}>Reset</Button>
            ) : (
              <Button onClick={onSubmit} style={{padding:'10px'}}>
                <ClipLoader
                  color="#fff"
                  loading={true}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className={styles.confirm}>
            <h3 className={styles.comfirm_title}>Reset Password</h3>
            <p className={styles.confirm_text}>
              Create a new and strong password of more than 8 characters.
            </p>
            <a
              className={styles.confirm_link}
              onClick={() => navigate("/login/")}
            >
              back to log in
            </a>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default ResetForm;
