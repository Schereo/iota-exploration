import { ClientBuilder } from "@iota/client";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export const client = new ClientBuilder()
  .network("devnet")
  .localPow(true)
  .build();
export const seed1 = process.env.SEED1;
export const seed2 = process.env.SEED2;
export const addr1 = process.env.ADDR1;
export const addr2 = process.env.ADDR2;

export const generateSeed = () => {
  const seed = crypto
    .createHash("sha256")
    .update(crypto.randomBytes(256))
    .digest("hex");
  return seed;
};

export const getAddress = async (seed) => {
  const address = await client
    .getAddresses(seed)
    .accountIndex(0)
    .range(0, 1)
    .get();
  return address[0];
};

export const getAddressBalance = async (addr) => {
  const { address, balance, dustAllowed } = await client.getAddressBalance(
    addr
  );
  return { address, balance, dustAllowed };
};

export const getSeedBalance = async (seed) => {
  const balance = await client
    .getBalance(seed)
    .accountIndex(0)
    .initialAddressIndex(0)
    .get();
  return balance;
};

export const logFormattedBalance = async (addr) => {
  const balance = (await getAddressBalance(addr)).balance;
  const formatter = new Intl.NumberFormat("en-EN");
  console.log(`Balance at addr ${addr}: ${formatter.format(balance)} i`);
};

export const sendTokens = async (senderSeed, receiverAddress, amount) => {
  const message = await client
    .message()
    .seed(senderSeed)
    .output(receiverAddress, amount)
    .submit();
  return message;
};

export const sendDust = async (senderSeed, receiverAddress, amount) => {
  const message = await client
    .message()
    .seed(senderSeed)
    .dustAllowanceOutput(receiverAddress, amount)
    .submit();
  return message;
};

export const findOutputs = async (addr) => {
  const outputs =
    await client.findOutputs([], [addr]);
  return outputs;
};
