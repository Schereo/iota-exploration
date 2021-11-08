import { fetchMamStream } from "./helper.js";

export const runMam = async () => {
    const root = 'EGG9DDEVMOSLRUNXOINNFIVMOPYIXDSWNFM9DMVXLYIOHCLCHBPBLKEQLLRAEBEUZRXOFHKXOBRWNSEQR';
    const sideKey = 'AFO9BVQLOQCJOVKQLGWTBGTNGVFICELHHWQBGHMXFOWTB9SM9JEMTWYNMGUNJKPKFJYZRTMTRCTTJXADW';
    
    const mamStream = await fetchMamStream(root, sideKey);
    console.log(mamStream)
}
