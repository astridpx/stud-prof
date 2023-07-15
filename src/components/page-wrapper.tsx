import React from "react";
import Navbar from "./Navbar";
import { VerifyToken } from "../APIs/api";
import { useQuery } from "react-query";
import loginStore from "../store/login.store";
import UserStore from "../store/User.store";

interface IProps {
  children: React.ReactNode;
}

const Pagewrapper = ({ children }: IProps) => {
  const { Logout } = loginStore();
  const { resetUser } = UserStore();
  const { isError } = useQuery({
    queryKey: ["token-verifier"],
    queryFn: VerifyToken,
  });

  if (isError) {
    console.log("error");
    Logout();
    resetUser();
  }

  return (
    <>
      <main className="h-max w-full bg-red-100 ">
        <Navbar />
        {/* <section className="h-max p-4 w-full"> */}
        {children}
        {/* </section> */}
      </main>
    </>
  );
};

export default Pagewrapper;
