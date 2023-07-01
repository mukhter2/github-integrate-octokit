const { Octokit } = require("@octokit/rest");
const { response } = require("express");
require("dotenv").config()
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN
  });

  //get user info
async function getUser (){
    const { data } = await octokit.request("/user");
    console.log(data);
}

//create a repository
async function createGithubRepo(){
  octokit.rest.repos.createForAuthenticatedUser({
    name : "automated-repoCreation2",
  }).then((response)=>console.log("repo created"));
}

//create a fork
async function createFork(){
  octokit.rest.repos.createFork({
    owner: "onethread-app",
    repo: "gantt-chart",
  }).then((response)=> console.log(response));
}

//create an issue
async function createIssue(){
  octokit.rest.issues.create({
    owner: "mukhter2",
    repo: "automated-repoCreation",
    title: "make changes on line 5-19",
  }).then((response)=> console.log("issue created successfully :",response.status));
}

async function deleteRepo(){
  octokit.rest.repos.delete({
    owner: "mukhter2",
    repo:"automated-repoCreation2",
  }).then((response)=> console.log(response.status));
}
module.exports={getUser,createGithubRepo,createFork,createIssue,deleteRepo};