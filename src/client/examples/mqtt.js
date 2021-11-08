import { addr1, client, seed1, seed2, sendTokens } from '../helper.js';

export const mqtt = async () => {
  const { messageId } = await sendTokens(seed2, addr1, 1000000);
  console.log(messageId);
  client
    .subscriber()
    .topic(`messages/${messageId}/metadata`)
    .subscribe((err, data) => {
      const payload = data.payload;
      console.log(JSON.parse(payload));
    });
};
