import React, { useState } from "react";
import styles from "./SignupForm.module.scss";
import { useNavigate } from "react-router-dom";
import google from "../../shared/assets/icons/google.png";
import { toast } from "react-toastify";
import { signup } from "../../shared/service/AuthService";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";
import { useForm, FormProvider } from "react-hook-form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { setUser, setIsAuth } from "../../shared/store/Slice/AuthSlice.js";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  name_validation,
  surname_validation,
  password_validation,
  email_validation,
} from "../../shared/Validations.js";

const SignupForm = () => {
  // states
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // functions

  const handleSignup = async (user) => {
    try {
      setLoading(true);
      const postData = {
        username: user.name,
        email: user.email,
        password: user.password,
        lastname: user.surname,
      };
      const response = await signup(postData);
      console.log(response);
      console.log(response.data);
      dispatch(
        setIsAuth({
          isAuth: true,
        })
      );
      dispatch(
        setUser({
          user: response.data.user,
        })
      );
      setWarning(false);
      setSuccess(true);
      setTimeout(() => {
        navigate(`/interview/`);
      }, 1000);
    } catch (err) {
      if (err) {
        console.log(err);
        setWarning(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo/",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    handleSignup(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className={styles.form_container}
      >
        <div className={styles.signup}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            <h3 className={styles.signup_title}>Create An Account</h3>
            <p className={styles.signup_text}>
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <div className={styles.signup_form}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Input {...name_validation} />
              <Input {...surname_validation} />
            </div>
            <Input {...email_validation} />
            <Input {...password_validation} />
          </div>
          <div className={styles.signup_foot}>
            {success && (
              <p className={styles.success}>
                <BsFillCheckSquareFill /> Form has been submitted successfully
              </p>
            )}
            {warning && (
              <p className={styles.warning}>
                <IoWarningOutline /> A user with this name is already
                registered.
              </p>
            )}

            {!loading ? (
              <Button onClick={onSubmit}>Create Account</Button>
            ) : (
              <Button onClick={onSubmit} style={{ padding: "10px" }}>
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
              <p className={styles.link_text}>Already Have An Account?</p>
              <a
                className={styles.signup_link}
                onClick={() => navigate("/login/")}
              >
                Sign In
              </a>
            </div>
            <button className={styles.home} onClick={handleGoogleLogin}>
              <img src={google} alt="" />
              <p> - with google</p>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
