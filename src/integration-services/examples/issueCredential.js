import axios from 'axios';

const requestNonceForSigning = async () => {
  const identityId = 'did:iota:BXPfxFjQtWCke5N2ncc5evMcesh1AWxqAY2j5jjuu9xg';
  const response = await axios.get(`http://localhost:3001/api/v1/authentication/prove-ownership/${identityId}`);
  console.log(response.data);
};

requestNonceForSigning();
