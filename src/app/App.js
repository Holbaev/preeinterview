import routes from '../shared/routes';
import './App.scss';
import { Routes , Route } from 'react-router-dom';
import { ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes?.map((route) =>(
          <Route key={route.path} path={route.path} element={route.component}/>
        ))}
        <Route path="*" element={<NotFoundPage/>} />
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
