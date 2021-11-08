import { findOutputs, getAddressBalance, sendDust, sendTokens } from './client/helper.js';

// console.log(await findOutputs('atoi1qz5xr3yn7pcdzhk3xhtgmdmaugjyj5m0tlkly9krhz250q047t97qdgktqk'));

const addressOutputs = await findOutputs('atoi1qz5xr3yn7pcdzhk3xhtgmdmaugjyj5m0tlkly9krhz250q047t97qdgktqk');

const DUST_THRESHOLD = 1000000;
const combinedDustedIota = addressOutputs.reduce(
  (combinedAmount, currentOutput) =>
    currentOutput.amount < DUST_THRESHOLD ? combinedAmount + currentOutput.amount : combinedAmount,
  0
);
console.log(combinedDustedIota);
const numberOfDustedOutputs = addressOutputs.reduce(
  (combinedAmount, currentOutput) => (currentOutput.amount < DUST_THRESHOLD ? combinedAmount + 1 : combinedAmount),
  0
);
console.log(numberOfDustedOutputs);
let startDate = new Date();
setInterval(async () => {
  const info = await getAddressBalance('atoi1qz5xr3yn7pcdzhk3xhtgmdmaugjyj5m0tlkly9krhz250q047t97qdgktqk');
  console.log(info);
  if (info.dustAllowed) {
    startDate = new Date();
  } else {
    const timeSinceLastDustAllowed = (new Date() - startDate) / 1000;
    console.log(`Time since last dustAllowed: ${timeSinceLastDustAllowed} s`);
  }
}, 2000);

// const message = await sendDust('66b053bf3f4b93a094eddb436251621bbdabc5d149fb33bb279012e98a4c0ea4', 'atoi1qzeuwq05ch6j5kln8q67fc55ql6jdczsfdeqx5vpfzm6lualjm0zyt6al8c', info.balance);

// const message = await sendTokens('66b053bf3f4b93a094eddb436251621bbdabc5d149fb33bb279012e98a4c0ea4', 'atoi1qrqzs6mvzjme9qra9pmcvhh0v2sdem5rdwyp4ajpv5c4eyxy2h4k28zw6n2', 10);

// console.log(message)
