const { Octokit } = require('@octokit/rest');
const { createOAuthAppAuth } = require('@octokit/auth-oauth-app');

// Create an instance of createOAuthAppAuth
const auth = createOAuthAppAuth({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
var val = auth.headers.authorization.split(" ");
// Use the auth instance to authenticate the Octokit instance
auth({ type: 'oauth-app',code:val[1] })
  .then(auth => {
    // var val = auth.headers.authorization.split(" ");
    // console.log(val[1]);
    const { token } = auth;
    console.log('Access Token:', token);
    // Create an instance of Octokit with the auth instance
    const octokit = new Octokit({ auth: token });

    // Use the octokit instance to make authenticated requests
    async function makeAuthenticatedRequest() {
      try {
        const response = await octokit.request("/user");
        
        // Handle the response data
        console.log('User:', response.data);
      } catch (error) {
        console.error('Error making authenticated request:', error);
      }
    }

    makeAuthenticatedRequest();
  })
  .catch(error => {
    console.error('Error authenticating:', error);
  });
