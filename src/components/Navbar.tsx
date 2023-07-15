import { Link, useNavigate } from "react-router-dom";
import loginStore from "../store/login.store";
import UserStore from "../store/User.store";
import { LogoutRequest } from "../APIs/api";
import { useQuery } from "react-query";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const { Logout } = loginStore();
  const { role, name, resetUser } = UserStore();

  axios.defaults.withCredentials = true;
  const HandleLogout = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_TOKEN_API_URL}/logout`
    );
    // if (isError) alert("error on logout. SERVER ERROR");
    if (response.status === 201) {
      Logout();
      resetUser();
      alert(response.data.message);
      navigate("/Login");
    }
  };

  return (
    <>
      <nav className="h-24 w-full bg-pink-300 flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold ">
          {role}:{name}
        </h1>

        <div className="space-x-4 font-semibold text-xl">
          <Link to="/">Home</Link>
          <Link to="/Students">Students</Link>
        </div>

        <button
          className="border border-white px-6 py-2 font-semibold"
          onClick={HandleLogout}
        >
          Logout
        </button>
        {/* <Button variant="outlined">Outlined</Button> */}
      </nav>
    </>
  );
};

export default Navbar;
