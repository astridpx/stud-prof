import { Navigate, Outlet } from "react-router-dom";
import loginStore from "../store/login.store";

const Auth = () => {
  const { auth } = loginStore();

  return auth ? <Outlet /> : <Navigate to="/Login" />;
};

export default Auth;
