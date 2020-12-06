import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeNormal from './HomeNormal';
import HomeTimeMoment from './HomeTimeMoment';

function Home() {
  const [data, setData] = useState(null);

  function timestampToReadable(timestamp) {
    const date = new Date(timestamp);
    const timeString = date.toLocaleTimeString()
      .split(/[:\s]/);
    return `${timeString[0]}:${timeString[1]} ${timeString[3]}`;
  }

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
        console.log(response);
      });
  }, []);

  if (data) {
    return (
      data.isTiming
        ? <HomeTimeMoment timedActivity={data.moment} />
        : <HomeNormal lastMood={data.mood} />);
  }
  return '';
}

export default Home;
