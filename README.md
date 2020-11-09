# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Moments

Moments


========
= GOALS =
========

Moments helps the user understand the correlations between their activities and moods.

Aim for simplicity and clarity in all aspects over granularity of data collected.

- All aspects of the UI and data presented are simple enough to understand brainlessly
- All pieces of data are two clicks away maximum


========
=  PAGES =
========

- Nav bar:
    - Data by day or month
    - Trends 
        - shows activities by mood or
        - Shows moods by activity
    - Profile: Account management

- Home: Normal
    - Displays last check in time and mood
    - Two buttons:
        - Time Activity
        - Check In
    - Nav bar

HOME: TIMING ACTIVITY

- Purpose: Show duration and basic info of current Moment being recorded
    - Provide easy way to check in mood

- Displays:
    - Activity selected as heading
    - Start time and notes on task specifics as small text
    - current duration of activity as main text
    - Button to stop timing activity
        - This button should lead to mood check in at end of task
- Mood Check In
    - 5 mood circles are tappable 
    - Optional input for emotions or notes
    - “Check in now” button to record another mood during activity
- Nav bar

START ACTIVITY SCREEN

- Purpose: Easily enter information and current mood before starting a Moment

- Should be able to:
    - Select activity
    - Select mood
    - Optional inputs:
        - Notes on activity specifics - i.e. specific task at hand
        - Notes on mood and emotions - i.e. emotion descriptors 
- Has a “start timing activity” button

MOMENT OVERVIEW

- Purpose: Show activity information and mood information for a recorded Moment

- Displays:
    - Activity selected as heading
    - Time start to time end 
    - Notes on task specifics
    - Total Duration
- Moods section
    - Minimum shows start and end mood with times
        - Click mood listing to show mood notes if exists?
    - If one or more mood check ins during activity, these are listed chronologically too


DAY OVERVIEW

- Purpose: Show the current moods and entries for a day

- Display current date first
    - Left and right arrows allow you to navigate back and forth one day up to current day
- Display mood chart: line graph of mood vs. time for ALL moods recorded that day
- Display entries
    - Clicking an entry leads to a moments overview of entry
    - Chronological order of all timed activities and check in s today
        - Time activity:
            - Display activity selected plus optional text
            - Start time and mood 
            - End time and mood
            - All check ins during this Moment isn’t shown on moment card
        - Check In
            - Activity selected plus optional text
            - Time of check in and mood
- Navigation to calendar view

MONTH OVERVIEW

- Purpose: 
    - Show the average moods for each day of a month
    - Show frequency of activity during a month

- Month heading
- Calendar view
    - Boxes are colored in with average of recorded moods that day
    - Clicking a day leads to day overview for day
- Activities
    - Each activity selection is a button
    - Clicking an activity changes the calendar
        - Calendar is colored in with average mood recorded from activity…? (average…?)
        - So colored in boxes reflect when you recorded an activity
        - Bottom shows “average mood change” amount

TRENDS: ACTIVITIES vs. MOOD

- Purpose: 
    - Provide way to view counts/percentages of recorded activities per mood 

- Must select mood to view data
- Mood Selection: the five circles with faces 
    - Clicking one displays data for that mood as a histogram
    - And displays % number 

TRENDS: MOODS vs. ACTIVITIES

- Purpose: 
    - Provide a way to view moods recorded for each activity

- Basic stats:
    - List activity with greatest average mood change and its mood change
    - List activity with greatest percentage of high mood recorded

- Must select activity to view data
- Histogram showing % of each mood for selected activity

PROFILE

- Purpose: Provide account management abilities
- Account info
    - Name
    - Email
    - Password and confirmation



SVG
https://www.flaticon.com/packs/smileys-13
https://www.flaticon.com/premium-icon/happy_2461974





