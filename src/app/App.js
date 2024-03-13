import routes from "../shared/routes";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { checkUser } from "../shared/service/UserService";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { setUser, setIsAuth } from "../shared/store/Slice/AuthSlice";

function App() {
  // states
  const dispatch = useDispatch();
  const user =  useSelector((state) => state.auth.user);
  console.log(user);
  // functions
  useEffect(() => {
    const handleCheckUser = async () => {
      try {
        const response = await checkUser();
        localStorage.setItem("token", response.data.access);
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
      } catch (err) {}
    };
    handleCheckUser();
  }, []);
  
  return (
    <div className="App">
      <Routes>
        {routes?.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        toastClassName="toast"
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
