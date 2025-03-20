import { create } from "zustand";

interface User {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (updatedFields: User) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  updateUser: (updatedFields: User) =>
    set((state) => ({ user: { ...state.user, ...updatedFields } })),
}));

export default useUserStore;
