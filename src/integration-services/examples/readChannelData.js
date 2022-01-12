const createIdentity = async () => {
    const user = { username: 'example-user' };
    const response = await axios.post('http://localhost:3001/api/v1/identities/create', user);
    console.log(JSON.stringify(response.data, null, 4));
  };
  
  createIdentity();