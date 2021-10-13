import {
  addr1,
  addr2,
  findOutputs,
  getAddressBalance,
  logFormattedBalance,
  seed1,
  seed2,
  sendDust,
  sendTokens,
} from "../helper.js";

export const sendTransaction = async () => {
  // await sendNonDustTransaction();
  //   await sendDustTransaction();
  console.log("Outputs addr1:");
  console.log(await findOutputs('atoi1qq78nree3k68xns8hawn6v2qmfk5686x73hh5phsztnme0t56g64s4vj7ge'));
  // console.log("Outputs addr2:");
  // console.log(await findOutputs(addr2));
  // console.log("--------------")
  // console.log("Balance addr1:")
  // console.log(await getAddressBalance(addr1));
  // console.log("Balance addr2:")
  // console.log(await getAddressBalance(addr2));
};

const sendNonDustTransaction = async () => {
  logFormattedBalance(addr1);
  logFormattedBalance(addr2);
  const message1 = await sendTokens(seed1, addr2, 500);
  //   const message2 = await sendTokens(seed2, addr1, 500);
  console.log(message1.messageId);
  //   console.log(message2.messageId);
};

const sendDustTransaction = async () => {
  logFormattedBalance(addr1);
  logFormattedBalance(addr2);
  const message1 = await sendDust(seed2, addr1, 1000000);
  //   const message2 = await sendDust(seed2, addr2, 500);
  console.log(message1);
  //   console.log(message2);
};
