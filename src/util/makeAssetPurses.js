import { makeMint } from '@agoric/ertp/core/mint';
import { assets } from '../config/assets';

const makeAssetPurses = () =>
  assets.reduce(
    (acc, val) => ({
      ...acc,
      [val]: makeMint(val).mint(0, val),
    }),
    {},
  );

export default makeAssetPurses;
