// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';
import DateTimeHelper from './utils/DateTimeHelper';

function makeServer({ environment = 'development' } = {}) {
  const dtHelper = new DateTimeHelper();
  const database = {
    moment: [{
      createdAt: '2020-06-22 15:15:25',
      finishedAt: '2020-06-22 21:15:25',
      description: 'Spending time with the fam bam',
      category: 'Family',
    }],
    mood: [{
      createdAt: '2020-06-22 07:15:25',
      rating: 4,
      description: 'Feeling relieved and content',
    }],
  };

  const server = createServer({
    environment,

    routes() {
      this.get('/most_recent_moment', () => ({
        moment: database.moment[0],
        mood: database.mood[0],
      }));

      this.post('/moment/create', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        let now = new Date();
        now = dtHelper.dateToTimestamp(now);

        const moment = {
          id: 15,
          createdAt: now,
          finishedAt: null,
          description: data.activityDescription,
          category: data.category,
        };

        const mood = {
          createdAt: now,
          rating: data.mood,
          description: data.moodDescription,
          momentId: moment.id,
        };

        database.moment.unshift(moment);
        database.mood.unshift(mood);
      });

      this.post('/mood/create', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        console.log(data);
      });

      this.post('/moment/finalize', (schema, request) => {
        const data = JSON.parse(request.requestBody);
        console.log(data);

        let now = new Date();
        now = dtHelper.dateToTimestamp(now);

        const mostRecentMoment = database.moment[0];
        mostRecentMoment.finishedAt = now;

        const mood = {
          createdAt: now,
          rating: data.mood,
          description: data.moodDescription,
          momentId: mostRecentMoment.id,
        };

        database.mood.unshift(mood);
      });
    },
  });

  return server;
}

export default makeServer;
