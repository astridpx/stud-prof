import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Students from "./pages/Students/Students";
import StudentDetails from "./pages/Students/Student-id";
import AddNewStudent from "./pages/Add-New";
import Login from "./pages/login/Login";
import SetPassword from "./pages/login/Set-Password";
import Auth from "./Auth/auth";
// import { TokenVerifier } from "./Auth/Token-Verifyer";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Auth />}>
            <Route path="/" element={<Home />} />

            <Route path="/Students" element={<Students />} />
            <Route path="/Students/:name/:id" element={<StudentDetails />} />
            <Route path="/Add-Student" element={<AddNewStudent />} />
          </Route>

          <Route path="/Set-Password" element={<SetPassword />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
