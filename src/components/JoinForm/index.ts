import dynamic from 'next/dynamic';

export const JoinForm = dynamic(
  async () => (await import('./JoinForm')).JoinForm,
  { ssr: false }
);
