const assets = ['OPTN', 'ATOM'];

// Iterate over `assets` to create unique option asset combinations
const assetPairs = assets.reduce(
  (acc, val, idx, src) => [
    ...acc,
    ...src.reduce(
      (srcAcc, srcVal, srcIdx) => [
        ...srcAcc,
        ...(idx !== srcIdx ? [`${val}_${srcVal}`] : []),
      ],
      [],
    ),
  ],
  [],
);

export { assets, assetPairs };
