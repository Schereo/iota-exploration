// These lines make "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createChannel } = require('@iota/mam.js');
import { generateSeed, publishMamData } from '../helper.mjs';
import data from './data.json';

export const publishData = async () => {
  const seed = generateSeed(81);
  const secretKey = generateSeed(81);
  console.log('Secret key: ', secretKey);
  const testData = data.testData;
  const channelState = createChannel(seed, 2, 'restricted', secretKey);
//   const channelState = createChannel(seed, 2, 'public');
  for (const tempData of testData) {
    console.log(tempData);
    const transaction = await publishMamData(process.env.LB_NODE_URL, tempData, channelState);
  }
  //   console.log(transaction);
};
