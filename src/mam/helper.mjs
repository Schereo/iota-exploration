// These lines make "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import dotenv from 'dotenv';
const { asciiToTrytes, trytesToAscii } = require('@iota/converter');
const { createChannel, createMessage, mamAttach, mamFetch } = require('@iota/mam.js');
const crypto = require('crypto');
dotenv.config();

export const fetchMamStream = (root, sidekey, mode = 'restricted') => {
  return new Promise(async (resolve, reject) => {
    try {
      const message = await mamFetch(process.env.LB_NODE_URL, root, mode, sidekey);
      console.log('Mam steam:', message);
      const trytes = trytesToAscii(message.message);
      const decoded = decodeURIComponent(trytes);
      resolve(JSON.parse(decoded));
    } catch (e) {
      console.error('Could not fetch mam stream:', e);
      reject();
    }
  });
};

export const createMamChannel = (seed, security, mode, secretKey = undefined) => {
  const mamState = createChannel(seed, security, mode, secretKey);
  return mamState;
};

export const publishMamData = async (provider, data, channelState, tag = 'EXAMPLE_DATA') => {
  const trytes = asciiToTrytes(encodeURI(JSON.stringify(data)));
  const message = createMessage(channelState, trytes);
  console.log('Message root: ', message.root);
  const transaction = await mamAttach(provider, message, tag);
  return transaction;
};

// Random Key Generator
export const generateSeed = (length) => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
  let key = '';
  while (key.length < length) {
    const byte = crypto.randomBytes(1);
    if (byte[0] < 243) {
      key += charset.charAt(byte[0] % 27);
    }
  }
  return key;
};
