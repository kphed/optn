import coins from 'coins';
import { assets } from '../config/assets';
import makeAssetPurses from './makeAssetPurses';

const configureCoinMiddleware = app => {
  const assetPurses = makeAssetPurses();

  app.use(
    coins({
      name: 'assets',
      // Construct options obj
      handlers: assets.reduce(
        (acc, val) => ({
          ...acc,
          [val]: {
            initialState: {
              purse: assetPurses[val],
            },
            // TODO: Implement I/O handlers
            // onInput(input, tx, state) {},
            // onOutput(output, tx, state) {},
          },
        }),
        {},
      ),
    }),
  );
};

// TODO: Implement transaction handler
// const configureTransactionHandler = () => app.use((state, tx) => {});

export default app => {
  configureCoinMiddleware(app);
};
