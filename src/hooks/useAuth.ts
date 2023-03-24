import { create } from 'zustand';
import { loginUser } from '@/pages/api/auth/login';
import { signupUser } from '@/pages/api/auth/signup';
import { Session, User, AuthError } from '@supabase/gotrue-js';
import { logoutUser } from '@/pages/api/auth/logout';
import { persist } from 'zustand/middleware';

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      isAuthenticated: false,

      signup: (email: string, password: string) => signupUser(email, password),
      login: (email: string, password: string) =>
        loginUser(email, password).then((res) => {
          set({
            user: res.data.user,
            session: res.data.session,
            isAuthenticated: true,
          });
        }),
      logout: () => {
        logoutUser().then(() =>
          set({ isAuthenticated: false, user: null, session: null })
        );
      },
    }),
    { name: 'authStorage' }
  )
);

type AuthState = {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  signup: (
    email: string,
    password: string
  ) => Promise<{
    data: { user: User | null; session: Session | null };
    error: AuthError | null;
  }>;
  login: (email: string, password: string) => void;
  logout: () => void;
};
