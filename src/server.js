// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer } from 'miragejs';

function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    routes() {
      // return all timed activities, check ins and moods...?
      this.get('/most_recent_moment', () => ({
        moment: {
          createdAt: '2020-06-22 15:15:25',
          finishedAt: '2020-06-22 21:15:25',
          description: 'Spending time with the fam bam',
          category: 'Family',
        },
        mood: {
          createdAt: '2020-06-22 21:15:25',
          rating: 4,
          description: 'Feeling relieved and content',
        },
      }));
    },
  });

  return server;
}

export default makeServer;
