import React, { useState } from "react";
import styles from "./PasswordPage.module.scss";
import Button from "../../shared/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword } from "../../shared/service/AuthService";
import Input from "../../shared/Input/Input";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";

const PasswordPage = () => {
  // states
  const token = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [required, setRequired] = useState(false);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);
  const [showRes, setShowRes] = useState(false);

  // functions
  const handlePassword = async () => {
    if (password === "" && confirmPassword === "") {
      toast.warning("Заполните все обязательные  поля.");
      setRequired(true);
    } else if (password.length <= 8) {
      toast.warning("Пароль должен быть не менее 8 символов");
      console.log(password.length);
    } else if (password !== confirmPassword) {
    } else {
      try {
        const postData = {
          password: password,
        };
        const response = await changePassword(token.id, postData);
        toast.success("Ваш пароль был изменен.");
        setDone(true);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const setState = (value, setState) => {
    setState(value);
  };
  return (
    <div className={styles.confirm_wrapper}>
      {!done ? (
        <div className={styles.confirm}>
          <h3 className={styles.comfirm_title}>Reset Password</h3>
          <p className={styles.confirm_text}>
            Create a new and strong password of more than 8 characters.
          </p>
          <div className={styles.confirm_form}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "5px",
              }}
            >
               <div style={{
                  display: "flex",
                  justifyContent:'space-between',
                  width: "100%",
                  gap: "5px",
                  paddingRight:'5px'
                }}>
                <label
                  htmlFor="password"
                  style={{ cursor: "pointer", fontWeight: "600" }}
                >
                  Password
                </label>
                <button style={{border:'none' , background:'transparent' , cursor:'pointer'}} onClick={() => setShow(!show)}>
                  <img src={show ? showEye : closeEye} alt="" />
                </button>
                </div>
              <Input
                id="password"
                type={show ? 'text' : 'password'}
                className={styles.confirm_input}
                placeholder="New password"
                style={{
                  border:
                    required && password === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                  padding: "20px 30px",
                }}
                onChange={(e) => setState(e.target.value, setPassword)}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "5px",
              }}
            >
              <div style={{
                  display: "flex",
                  justifyContent:'space-between',
                  width: "100%",
                  gap: "5px",
                  paddingRight:'5px'
                }}>
                <label
                  htmlFor="Rep-password"
                  style={{ cursor: "pointer", fontWeight: "600" }}
                >
                   Repeat password
                </label>
                <button style={{border:'none' , background:'transparent' , cursor:'pointer'}} onClick={() => setShowRes(!showRes)}>
                  <img src={showRes ? showEye : closeEye} alt="" />
                </button>
                </div>
              <Input
              id="Rep-password"
                type={showRes ? "text" : "password"}
                className={styles.confirm_input}
                placeholder="Repeat password"
                style={{
                  border:
                    required && password === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                      padding: "20px 30px",
                }}
                onChange={(e) => setState(e.target.value, setConfirmPassword)}
              />
            </div>
          </div>
          <Button onClick={handlePassword}>Reset</Button>
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
    </div>
  );
};

export default PasswordPage;
