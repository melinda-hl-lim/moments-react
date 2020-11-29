// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

function makeServer({ environment = 'development' } = {}) {
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

      this.post('/moment/create', (request) => {
        const data = JSON.parse(request.requestBody);

        const date = new Date();
        const yyymmdd = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

        const moment = {
          createdAt: `${yyymmdd} ${date.toLocaleTimeString()}`,
          finishedAt: null,
          description: data.activityDescription,
          category: data.category,
        };

        const mood = {
          createdAt: `${yyymmdd} ${date.toLocaleTimeString()}`,
          rating: data.mood,
          description: data.moodDescription,
        };

        database.moment.unshift(moment);
        database.mood.unshift(mood);
      });
    },
  });

  return server;
}

export default makeServer;
