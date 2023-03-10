import Link from 'next/link';
import { styles } from '@/components/Header/Header.styles';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.nav}>
        {isAuthenticated ? (
          <Link href="/logout">
            <button className={`${styles.button(theme)}`}>Logout</button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <button className={`${styles.button(theme)}`}>Login</button>
            </Link>
            <Link href="/join">
              <button className={`${styles.button(theme)}`}>Join</button>
            </Link>{' '}
          </>
        )}
      </div>
    </div>
  );
};
