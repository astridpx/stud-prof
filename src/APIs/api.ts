import axios from "axios";
axios.defaults.withCredentials = true;

export const LoginRequest = async (data: ILogin) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/login-student`,
    { ...data }
  );
  console.log(response);
  return response.data;
};
export const LogoutRequest = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`);
  return response.data;
};

export const fetchStudent = async () => {
  // axios.defaults.withCredentials = true;
  // axios
  //   .get(import.meta.env.VITE_API_URL)
  //   .then((result) => console.log(result))
  //   .catch((err) => console.error(err));
  // try {
  const studs = await axios.get(import.meta.env.VITE_API_URL);

  return studs.data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const CreateStudent = async (data: IStudent) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/add-student`,
    { ...data }
  );
  // console.log(response);
  return response.data;
};

export const VerifyToken = async () => {
  const response = await axios.get(`${import.meta.env.VITE_TOKEN_API_URL}`);
  console.log(response);

  return { ...response };
};
