import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import TimeMomentActivitySelect from './TimeMomentActivitySelect';
import TimeMomentMoodSelect from './TimeMomentMoodSelect';
import TimeMomentLastMood from './TimeMomentLastMood';
import MomentOverview from './MomentOverview';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/moment_overview" component={MomentOverview} />
        <Route path="/time_moment_last_mood" component={TimeMomentLastMood} />

        <Route path="/moment/new/select_mood" component={TimeMomentMoodSelect} />
        <Route path="/moment/new/select_activity" component={TimeMomentActivitySelect} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
