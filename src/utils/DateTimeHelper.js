/* eslint-disable class-methods-use-this */
export default class DateTimeHelper {
  millisecondsToHours(milliseconds) {
    const MILLISECONDS_IN_AN_HOUR = 3600000;

    return Math.floor(milliseconds / MILLISECONDS_IN_AN_HOUR);
  }

  millisecondsToMinutes(milliseconds) {
    const MILLISECONDS_IN_A_MINUTE = 60000;

    return Math.floor(milliseconds / MILLISECONDS_IN_A_MINUTE);
  }

  // Given starttime and endtime, calculate duration between
  calculateDurationBetween(givenStartTime, givenEndTime) {
    const startTime = new Date(givenStartTime);
    const endTime = new Date(givenEndTime);

    const duration = endTime - startTime;
    const hours = this.millisecondsToHours(duration);
    const minutes = this.millisecondsToMinutes(duration);

    return {
      hours,
      minutes,
      inMilliseconds: duration,
    };
  }

  // Given start time and countdown period, calculate the remaining time left
  calculateRemainingCountdown(givenStartTime, countdownDuration) {
    const now = new Date();
    const currentDuration = this.calculateDurationBetween(givenStartTime, now);

    const remainingDuration = countdownDuration - currentDuration.inMilliseconds;
    const remainingHours = this.millisecondsToHours(remainingDuration);
    const remainingMinutes = this.millisecondsToMinutes(remainingDuration);

    return {
      hours: remainingHours,
      minutes: remainingMinutes,
      inMilliseconds: remainingDuration,
    };
  }

  // Given a timestamp of format YYYY-MM-DD HH:MM:SS get the time in format HH:MM AM/PM
  timestampToReadable(timestamp) {

  }

  // Given a ___ of format __ get the duration in HH hr MM min format

  // Create a timestamp given a date object (used in server.js)
}
