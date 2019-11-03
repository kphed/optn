import lotion from 'lotion';
import configureMiddleware from './util/configureMiddleware';

const app = lotion({
  logTendermint: true,
});

configureMiddleware(app);

app.start().then(({ GCI }) => console.log(`app started. gci: ${GCI}`));
