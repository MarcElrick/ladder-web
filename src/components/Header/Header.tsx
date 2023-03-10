import Link from 'next/link';
import { styles } from '@/components/Header/Header.styles';
import { useTheme } from '@/hooks/useTheme';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.nav}>
        <Link href="/login">
          <button className={`${styles.button(theme)}`}>Login</button>
        </Link>
        <Link href="/join">
          <button className={`${styles.button(theme)}`}>Join</button>
        </Link>
      </div>
    </div>
  );
};
