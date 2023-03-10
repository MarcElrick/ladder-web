import { useEffect, useState } from 'react';
import { selectContestsForUser } from '@/pages/api/contest/select';

const ContestsPage = () => {
  const [contestsLoaded, setContestsLoaded] = useState<boolean>(false);
  const [contests, setContests] = useState<string[]>([]);

  useEffect(() => {
    selectContestsForUser().then((res) => {
      setContests(res.data?.map((item) => item?.contest?.title || '') || []);
      setContestsLoaded(true);
    });
  }, []);
  console.log(contests);

  return (
    <div>{contestsLoaded && contests.map((title) => <h1>{title}</h1>)}</div>
  );
};

export default ContestsPage;
