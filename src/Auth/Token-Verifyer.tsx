import React, { ReactElement } from "react";
import { VerifyToken } from "../APIs/api";
import { useQuery } from "react-query";
import loginStore from "../store/login.store";
// import { Navigate, Outlet } from "react-router-dom";

export const TokenVerifier = ({ children }: { children?: ReactElement }) => {
  const { Logout } = loginStore();
  const {
    isLoading,
    isError,
    data: isValid,
    error,
    isSuccess,
  }: any = useQuery({
    queryKey: ["token-verifier"],
    queryFn: VerifyToken,
  });

  if (isError) {
    Logout();
    // window.location.reload();
  }
  return <>{children}</>;
};

// const Auth = () => {
//   const { auth } = loginStore();
//   useQuery({
//     queryKey: ["token-verifier"],
//     queryFn: VerifyToken,
//   });

//   return auth ? <Outlet /> : <Navigate to="/Login" />;
// };
