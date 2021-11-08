import { trytesToAscii } from '@iota/converter';
import { mamFetch } from '@iota/mam.js';

dotenv.config();

export const fetchMamStream = (root, sidekey, mode = 'restricted') => {
    return new Promise(async (resolve, reject) => {
      try {
        const message = await mamFetch(process.env.LB_NODE_URL, root, mode, sidekey);
        console.log('Mam steam:', message)
        const trytes = trytesToAscii(message.message);
        const decoded = decodeURIComponent(trytes);
        resolve(JSON.parse(decoded));
      } catch (e) {
        console.error('Could not fetch mam stream:', e);
        reject();
      }
    });
  };