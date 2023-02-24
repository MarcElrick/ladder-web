import { create } from "zustand";
import { loginUser } from "@/pages/api/auth/login";
import { signupUser } from "@/pages/api/auth/signup";
import { Session, User } from "@supabase/gotrue-js";

export const useAuth = create<AuthState>((set) => ({
  user: null,
  session: null,

  signup: (email: string, password: string) => signupUser(email, password),
  login: (email: string, password: string) =>
    loginUser(email, password).then((res) => {
      set({ user: res.data.user, session: res.data.session });
    }),
}));

type AuthState = {
  user: User | null;

  session: Session | null;
  signup: (email: string, password: string) => any;
  login: (email: string, password: string) => any;
};
