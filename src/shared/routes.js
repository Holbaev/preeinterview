import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import InterviewPage from "../pages/InterviewPage/InterviewPage";
import ConfirmPage from "../pages/ConfirmPage/ConfirmPage";
import PasswordPage from "../pages/PasswordPage/PasswordPage";

const routes = [
    { path: "/", component: <MainPage /> },
    { path: "/login/", component: <LoginPage /> },
    { path: "/signup/", component: <SignupPage /> },
    { path: "/interview/", component: <InterviewPage /> },  
    { path: "/confirm/:id", component: <ConfirmPage /> },
    { path: "/password/:id", component: <PasswordPage /> },
];

export default routes
