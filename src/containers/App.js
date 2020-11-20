import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import HomeTiming from './HomeTiming';
import SignIn from './SignIn';
import BuildingArea from './BuildingArea';
import TimeMomentActivitySelect from './TimeMomentActivitySelect';
import TimeMomentMoodSelect from './TimeMomentMoodSelect';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/building" component={BuildingArea} />
        <Route path="/time_moment_mood_select" component={TimeMomentMoodSelect} />
        <Route path="/time_moment_activity_select" component={TimeMomentActivitySelect} />
        <Route path="/home_timing" component={HomeTiming} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={SignIn} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
