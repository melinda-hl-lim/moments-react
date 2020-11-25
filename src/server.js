// eslint-disable-next-line import/no-extraneous-dependencies
import { createServer, Model } from 'miragejs';

function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      timed_activity: Model,
    },

    // eslint-disable-next-line no-shadow
    seeds(server) {
      server.create('timed_activity', {
        created_at: '2020-06-22 15:15:25',
        finished_at: '2020-06-22 21:15:25',
        description: 'Spending time with the fam bam',
        category: 'Family',
        user_id: 4,
      });
      server.create('timed_activity', {
        created_at: '2020-06-22 07:12:46',
        finished_at: '2020-06-22 07:36:29',
        description: 'Cooking egg bread!',
        category: 'Errands',
        user_id: 4,
      });
    },

    routes() {
      this.get('/moments', (schema) => schema.timed_activities.all());
    },
  });

  return server;
}

export default makeServer;
