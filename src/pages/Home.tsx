import { useNavigate } from "react-router-dom";
import Pagewrapper from "../components/page-wrapper";
import loginStore from "../store/login.store";

const Home = () => {
  const navigate = useNavigate();
  const { token, auth } = loginStore();
  return (
    <>
      <Pagewrapper>
        <section className="h-[85vh] p-4 w-full">
          <div className="h-32 w-64 bg-blue-400 flex items-center justify-center rounded-md cursor-pointer">
            <h1 className="text-3xl" onClick={() => navigate("/Add-Student")}>
              Add New
            </h1>
          </div>

          <div className="h-32 w-64 bg-blue-400 flex items-center justify-center rounded-md cursor-pointer">
            <h1
              className="text-3xl"
              onClick={() => {
                console.log(token);
                console.log(auth);
              }}
            >
              Check
            </h1>
          </div>
        </section>
      </Pagewrapper>
    </>
  );
};

export default Home;
