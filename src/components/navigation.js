import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PollIcon from '@material-ui/icons/Poll';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Your Day" value="your-day" icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="Trends" value="trends" icon={<PollIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<AccountBoxIcon />} />
    </BottomNavigation>
  );
}

export default NavBar;
