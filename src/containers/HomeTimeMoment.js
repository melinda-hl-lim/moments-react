import React from 'react';
import Navigation from '../components/Navigation';
import MomentHeaderCard from '../components/MomentHeaderCard';
import MoodCheckIn from '../components/MoodCheckIn';

function HomeTimeMoment() {
  return (
    <>
      <div className="min-h-custom flex flex-col items-center justify-center bg-orange-100 mb-16">

        <MomentHeaderCard
          activityCategory="Family"
          startTime="3:15 PM"
          activityDescription="Spend some time with the fam bam for the holidays"
          duration="05 hr 54 min"
          button="true"
        />
        {/* main content wrapper v */}
        <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">

          {/* card for mood check in */}
          <MoodCheckIn button="true" />

        </div>
      </div>

      <Navigation />
    </>
  );
}

export default HomeTimeMoment;
