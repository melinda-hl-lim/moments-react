import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNormal from './HomeNormal';
import HomeTimeMoment from './HomeTimeMoment';

function Home() {
  // const [mounted, setMounted] = useState(false);
  const [data, setData] = useState(null);

  function isCompleteMoment(moment) {
    return !!(moment.finishedAt);
  }

  // TODO: isTiming is always undefined and doesn't work
  // Build custom object in data OR set timing as a state
  // Then UNSTRICTIFY LINTER
  let isTiming;

  useEffect(() => {
    axios.get('/most_recent_moment')
      .then((res) => {
        isTiming = !(isCompleteMoment(res.data.moment));
        setData(res.data);
      })
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }, []);

  if (data) {
    return (
      isTiming
        ? (<HomeTimeMoment timedActivity={data.moment} />)
        : (<HomeNormal lastMood={data.mood} />));
  }
  return '';
}

export default Home;
