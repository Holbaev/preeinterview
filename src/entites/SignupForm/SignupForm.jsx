import React, { useState } from "react";
import "./SignupForm.scss";
import { useNavigate } from "react-router-dom";
import back from "../../shared/assets/icons/home (1).png";
import { toast } from "react-toastify";
import { signup } from "../../shared/service/AuthService";
import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";

const SignupForm = () => {
  // states
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [required, setRequired] = useState(false);
  const [done, setDone] = useState(false);
  const [show, setShow] = useState(false);

  // functions
  const handleSignup = async () => {
    if (name === "" && email === "" && password === "" && lastName === "") {
      toast.warning("Заполните все обязательные  поля.");
      setRequired(true);
    } else if (password.length < 8) {
      toast.warning("Пароль должен быть не менее 8 символов.");
    } else {
      try {
        const postData = {
          username: name,
          email: email,
          password: password,
          lastname: lastName,
        };
        const response = await signup(postData);
        setRequired(false);
        setDone(true);
        toast.success("Сообщение отправлено на подтверждение.");
      } catch (err) {
        if(err){
          console.log(err);
          toast.warning(err.response.data.detail)
        }
      }
    }
  };

  const setState = (value, setState) => {
    setState(value);
  };

  return (
    <>
      {!done ? (
        <div className="signup">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            <h3 className="signup_title">Create An Account</h3>
            <p className="signup_text">
              Create an account to enjoy all the services without any ads for
              free!
            </p>
          </div>
          <div className="signup_form">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
                <div style={{display:'flex' , flexDirection:'column' , width:'100%' , gap:'5px'}}>
              <label htmlFor="name" style={{cursor:'pointer' , fontWeight:'600'}}>Name</label>
              <Input
              id="name"
                type="text"
                onChange={(e) => setState(e.target.value, setName)}
                className="signup_input"
                placeholder="Name"
                style={{
                  border:
                    required && name === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                      padding:'20px 30px'
                }}
              />
            </div>
            <div style={{display:'flex' , flexDirection:'column' , width:'100%' , gap:'5px'}}>
              <label htmlFor="Surname" style={{cursor:'pointer' , fontWeight:'600'}}>Surname</label>
              <Input
              id="Surname"
                type="text"
                onChange={(e) => setState(e.target.value, setlastName)}
                className="signup_input"
                placeholder="Surname"
                style={{
                  border:
                    required && lastName === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                      padding:'20px 30px'
                }}
              />
            </div>
            </div>
            <div style={{display:'flex' , flexDirection:'column' , width:'100%' , gap:'5px'}}>
              <label htmlFor="Email" style={{cursor:'pointer' , fontWeight:'600'}}>Email</label>
              <Input
              id="Email"
              type="email"
              onChange={(e) => setState(e.target.value, setEmail)}
              className="signup_input"
              placeholder="Email Address"
                style={{
                  border:
                    required && lastName === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                      padding:'20px 30px'
                }}
              />
            </div>
            <div style={{display:'flex' , flexDirection:'column' , width:'100%' , gap:'5px'}}>
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
              type={show ? "text" : "password"}
              onChange={(e) => setState(e.target.value, setPassword)}
              className="signup_input"
              placeholder="Password"
                style={{
                  border:
                    required && lastName === ""
                      ? "1px solid #ff707f"
                      : "1px solid black",
                      padding:'20px 30px'
                }}
              />
            </div>
          </div>
          <div className="signup_foot">
            <Button onClick={handleSignup}>
              Create Account
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                width: "100%",
              }}
            >
              <p className="link_text">Already Have An Account?</p>
              <a className="signup_link" onClick={() => navigate("/login/")}>
                Sign In
              </a>
            </div>
            <button className="home" onClick={() => navigate("/")}>
              <img src={back} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <div className="signup">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            <h3 className="signup_title">User created</h3>
            <p className="sure_text">
              An account confirmation email was sent to
              {email}. After confirming your account, go to the authorization
              tab and log in.
            </p>
            <a className="signup_link" onClick={() => navigate("/login/")}>
              Sign In
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupForm;
