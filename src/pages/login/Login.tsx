import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { LoginRequest } from "../../APIs/api";
import loginStore from "../../store/login.store";
import UserStore from "../../store/User.store";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { authenticateUser, setToken } = loginStore();
  const { setName, setRole } = UserStore();
  const [user, setUser] = useState<ILogin>({
    email: "fei@gmail.com",
    password: "password123",
    isAdmin: true,
  });

  const LoginMutation = useMutation({
    mutationFn: LoginRequest,
    onSuccess: (res) => {
      // setUser({
      //   email: "",
      //   password: "",
      //   isAdmin: false,
      // });
      authenticateUser(res.isAuth);
      setRole(res.role);
      setToken(res.token);
      setName(res.name);
      alert(res.message);
      navigate("/");
    },
    onError: (error: any) => alert(error.response.data.message),
  });

  const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    LoginMutation.mutate({ ...user });
  };
  return (
    <>
      <section className="h-screen min-h-screen w-full bg-red-100">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <form className="mt-8 space-y-6" onSubmit={HandleLogin}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={user.password}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.value,
                      })
                    }
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    name="isAdmin"
                    type="checkbox"
                    // required
                    onChange={(e) =>
                      setUser({
                        ...user,
                        [e.target.name]: e.target.checked,
                      })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  />
                  <label
                    htmlFor="isAdmin"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Login as Admin
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group mb-2 relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                >
                  Sign in
                </button>

                <button
                  type="button"
                  className="group relative w-full flex justify-center
                py-2 px-4  border-transparent text-sm font-medium
                rounded-md text-indigo-600 border border-indigo-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                  onClick={() => navigate("/Set-Password")}
                >
                  Set Your Password {">"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
