import React, { useState } from "react";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import back from "../../shared/assets/icons/home (1).png";
import { login, resetPassword } from "../../shared/service/AuthService";
import { toast } from "react-toastify";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";

const LoginForm = () => {
  // states
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resEmail, setResEmail] = useState("");
  const [show, setShow] = useState(false);
  const [reset, setReset] = useState(false);
  const [required, setRequired] = useState(false);

  // functions
  console.log(email , password , resEmail);
  const handleLogin = async () => {
    if (email === "" && password === "") {
      toast.warning("Заполните все обязательные  поля.");
      setRequired(true);
    } else {
      try {
        const postData = {
          email: email,
          password: password,
        };
        const response = await login(postData);
        setRequired(false);
        console.log(response.data);
        console.log(response.data);
        localStorage.setItem("token", response.data.refresh);
        navigate(`/interview/`);
        toast.success("Вы успешно вошли в систему.");
      } catch (err) {
        if (err.response.status === 401) {
          toast.warning(
            "Извините, но такого пользователя у нас не существует."
          );
        } else {
          console.log(err.response);
        }
      }
    }
  };

  const handleReset = async () => {
    if (resEmail === "") {
      toast.warning("Напишите свою почту.");
      setRequired(true);
    } else {
      try {
        const postData = {
          email: resEmail,
        };
        console.log(postData);
        const response = await resetPassword(postData);
        setRequired(false);
        console.log(response);
        toast.success("Вам отправлено сообщение на сброс пароля.");
      } catch (err) {
        console.log(err);
        if (err) {
          toast.warning(err.response.data.email);
        }
      }
    }
  };
  const setState = (value, setState) => {
    setState(value);
  };

  const handleChange = () => {
    setReset(!reset);
    setRequired(false);
    setShow(false)
  };

  return (
    <>
      {!reset ? (
        <div className="login">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <h3 className="login_title">ACCOUNT LOGIN</h3>
            <p className="login_text">
              Log in to enjoy all the services without any ads for free!
            </p>
          </div>
          <div className="login_form">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "5px",
              }}
            >
              <label
                htmlFor="email"
                style={{ cursor: "pointer", fontWeight: "600" }}
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="login_input"
                placeholder="Email Address"
                style={{
                  border:
                    required && email === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                  padding: "20px 30px",
                }}
                onChange={(e) => setState(e.target.value, setEmail)}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                flexDirection: "column",
                width: "100%",
              }}
            >
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
                  className="login_input"
                  placeholder="Password"
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

              <a className="login_link" onClick={handleChange}>
                reset password
              </a>
            </div>
          </div>
          <div className="login_foot">
            <Button onClick={handleLogin}>Log in</Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                width: "100%",
              }}
            >
              <p className="link_text">You do not have an account?</p>
              <a className="login_link" onClick={() => navigate("/signup/")}>
                Sign up
              </a>
            </div>
            <button className="home" onClick={() => navigate("/")}>
              <img src={back} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div className="login">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <h3 className="login_title">Reset your password.</h3>
            <p className="login_text">
              Reset yuor password to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <div className="login_form">
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "5px",
                }}
              >
               <label
                  htmlFor="Resemail"
                  style={{ cursor: "pointer", fontWeight: "600" }}
                >
                  Email
                </label>
                <Input
                  id="Resemail"
                  type="email"
                  className="login_input"
                  placeholder="Email"
                  style={{
                    border:
                      required && password === ""
                        ? "1px solid #ff707f"
                        : "1px solid black",
                    padding: "20px 30px",
                  }}
                  onChange={(e) => setState(e.target.value, setResEmail)}
                />
              </div>
              <a className="login_link" onClick={handleChange}>
                back to log in
              </a>
            </div>
          </div>
          <Button onClick={handleReset}>Send reset link</Button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
