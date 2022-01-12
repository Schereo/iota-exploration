import { publishData } from "./examples/publishData.mjs";
import { fetchMamStream } from "./helper.mjs";

export const runMam = async () => {
    // const root = 'EGG9DDEVMOSLRUNXOINNFIVMOPYIXDSWNFM9DMVXLYIOHCLCHBPBLKEQLLRAEBEUZRXOFHKXOBRWNSEQR';
    // const sideKey = 'AFO9BVQLOQCJOVKQLGWTBGTNGVFICELHHWQBGHMXFOWTB9SM9JEMTWYNMGUNJKPKFJYZRTMTRCTTJXADW';
    
    // const mamStream = await fetchMamStream(root, sideKey);
    // console.log(mamStream)
    await publishData();
}
