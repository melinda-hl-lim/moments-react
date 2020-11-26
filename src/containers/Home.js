import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNormal from './HomeNormal';
import HomeTimeMoment from './HomeTimeMoment';

function Home() {
  const [data, setData] = useState(null);

  function isCompleteMoment(moment) {
    return !!(moment.finishedAt);
  }

  useEffect(() => {
    axios.get('/most_recent_moment')
      .then((res) => {
        res.data.isTiming = !isCompleteMoment(res.data.moment);
        setData(res.data);
      })
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
  }, []);

  if (data) {
    return (
      data.isTiming
        ? (<HomeTimeMoment timedActivity={data.moment} />)
        : (<HomeNormal lastMood={data.mood} />));
  }
  return '';
}

export default Home;
