import dynamic from 'next/dynamic';

export const Header = dynamic(async () => (await import('./Header')).Header, {
  ssr: false,
});
