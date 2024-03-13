import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";
import google from "../../shared/assets/icons/google.png";
import { login, resetPassword } from "../../shared/service/AuthService";
import { toast } from "react-toastify";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";
import { useForm, FormProvider } from "react-hook-form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import {
  name_validation,
  surname_validation,
  password_validation,
  email_validation,
} from "../../shared/Validations.js";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const LoginForm = () => {
  // states
  const navigate = useNavigate();
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(false);

  // functions
  const handleChange = () => {
    setReset(!reset);
    setSuccess(false);
    setWarning(false);
    methods.reset();
  };

  const handleLogin = async (user) => {
    try {
      setLoading(true);
      console.log(user);
      const postData = {
        email: user.email,
        password: user.password,
      };
      const response = await login(postData);
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        navigate(`/interview/`);
      }, 1000);
    } catch (err) {
      setWarning(true);
      console.log(err.response);
    }finally{
      setLoading(false);
    }
  };

  const handleReset = async (user) => {
    try {
      setLoading(true)
      const postData = {
        email: user.email,
      };
      const response = await resetPassword(postData);
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        handleChange()
      }, 1000);
    } catch (err) {
      if (err.status === 400) {
        toast.success(err.response.data.email);
      } else {
        console.log(err);
      }
    }finally{
      setLoading(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) =>{
      try{
        localStorage.setItem('token' , response.access_token);
        
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo/' , {
          headers:{
            Authorization: `Bearer ${response.access_token}`,
          }
        });
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }
  })

  const onSubmit = methods.handleSubmit((data) => {
    if (data.password) {
      handleLogin(data);
    } else {
      handleReset(data);
    }
    console.log(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} className="form_container">
        {!reset ? (
          <div className={styles.login}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <h3 className={styles.login_title}>ACCOUNT LOGIN</h3>
              <p className={styles.login_text}>
                Log in to enjoy all the services without any ads for free!
              </p>
            </div>
            <div className={styles.login_form}>
              <Input {...email_validation} />
              <Input {...password_validation} />
              <a className={styles.login_link} onClick={handleChange}>
                reset password
              </a>
            </div>
            <div className={styles.login_foot}>
              {success && (
                <p className={styles.success}>
                  <BsFillCheckSquareFill /> Form has been submitted
                  successfully.
                </p>
              )}
              {warning && (
                <p className={styles.warning}>
                  <IoWarningOutline /> Wrong email or password.
                </p>
              )}
              {!loading ? (
              <Button onClick={onSubmit}>Log in</Button>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: "100%",
                }}
              >
                <p className={styles.link_text}>You do not have an account?</p>
                <a className={styles.login_link} onClick={() => navigate("/signup/")}>
                  Sign up
                </a>
              </div>
              <button className={styles.home} onClick={handleGoogleLogin}>
                <img src={google} alt="" />
                <p> - with google</p>
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.login}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <h3 className={styles.login_title}>Reset your password.</h3>
              <p className={styles.login_text}>
                Reset yuor password to enjoy all the services without any ads
                for free!
              </p>
            </div>
            <div className={styles.login_form}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Input {...email_validation} />
                <a className={styles.login_link} onClick={handleChange}>
                  back to log in
                </a>
              </div>
              {success && (
                <p className={styles.success}>
                  <BsFillCheckSquareFill /> A message has been sent to you to
                  reset your password.
                </p>
              )}
            </div>
            {!loading ? (
              <Button onClick={onSubmit}>Send reset link</Button>
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
        )}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
