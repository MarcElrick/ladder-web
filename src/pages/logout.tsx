import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const LogoutPage = () => {
  const { logout } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    push('/').then(() => logout());
  }, []);

  return <></>;
};

export default LogoutPage;
