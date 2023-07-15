import { create } from "zustand";
import { persist } from "zustand/middleware";

const UserStore = create<IUser>()(
  persist(
    (set) => ({
      name: "",
      role: "",

      setName: (value) => set((state) => ({ name: (state.name = value) })),
      setRole: (role) => set((state) => ({ role: (state.role = role) })),

      resetUser: () =>
        set((state) => ({ name: (state.name = ""), role: (state.role = "") })),
    }),
    {
      name: "XHR-User",
    }
  )
);

export default UserStore;
