const express = require('express');
const dotenv = require('dotenv');
const { Octokit } = require('@octokit/rest');
const { createOAuthAppAuth } = require("@octokit/auth-oauth-app");

dotenv.config();

const app = express();
const port = 3000;

// Create an Octokit instance with your GitHub client ID and client secret


// Define a route to handle token retrieval





  const run= async ()=>{
    const appAuthentication = await auth({
        type: "oauth-app",
      });

      return appAuthentication.headers.authorization;
  }
  var val=run().then((res)=>{return res});
  
  const finres= async () => {
    const a= await val;
    const b= a;
    return b;
}
var z=finres();
console.log(z);
  