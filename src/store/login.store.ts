import { create } from "zustand";
import { persist } from "zustand/middleware";
import UserStore from "./User.store";

const loginStore = create<IAuth>()(
  persist(
    (set) => ({
      auth: false,
      token: "",

      //   FUNCTIOnS
      authenticateUser: (value) =>
        set((state) => ({ auth: (state.auth = value) })),

      setToken: (value) => set((state) => ({ token: (state.token = value) })),

      Logout: () =>
        set((state) => ({
          token: (state.token = ""),
          auth: (state.auth = false),
        })),
    }),
    {
      name: "XHR-CREDENTIALS",
    }
  )
);

export default loginStore;
