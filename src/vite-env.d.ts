/// <reference types="vite/client" />

interface StudentProp {
  _id?: number;
  fullname: string;
  age: number;
  birthday: string;
  gender: string;
  status: string;
  email: string;
  phone: string;
}
interface IStudent {
  fullname: string;
  age: number;
  birthday: string;
  gender: string;
  status: string;
  email: string;
  phone: string;
}

interface ILogin {
  email: string;
  password: string;
  isAdmin: boolean;
}

interface IAuth {
  auth: boolean;
  token: string;
  authenticateUser: (boolean) => void;
  setToken: (string) => void;
  Logout: () => void;
}

interface IUser {
  name: string;
  role: string;
  setName: (string) => void;
  setRole: (string) => void;
  resetUser: () => void;
}
