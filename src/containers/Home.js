import React from 'react';
import HomeNormal from './HomeNormal';
import HomeTimeMoment from './HomeTimeMoment';

function Home() {
  const timedActivity = {
    id: 15,
    created_at: '2020-06-22 15:15:25',
    finished_at: '',
    description: 'Spending time with the fam bam',
    category: 'Family',
    user_id: 4,
  };

  // TODO - change timingActivity so it actually queries the database
  const timingActivity = null;

  return (
    timingActivity
      ? (<HomeTimeMoment timedActivity={timedActivity} />)
      : (<HomeNormal />)
  );
}

export default Home;
