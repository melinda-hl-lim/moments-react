import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './Home';
import SignIn from './SignIn';
import BuildingArea from './BuildingArea';
import TimeActivitySelect from './TimeActivitySelect';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <Switch>
          <Route path="/building" component={BuildingArea} />
          <Route path="/time_activity_select" component={TimeActivitySelect} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={SignIn} />
        </Switch>
      </div>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
