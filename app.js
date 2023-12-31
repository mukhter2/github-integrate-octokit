const { Octokit } = require("@octokit/rest");
const { express } = require("express");

require("dotenv").config()
const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN
  });

  //get user info
async function getUser (){
    const { data } = await octokit.request("/user");
    return data;
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

async function createPull({owner,repo,head,base,title}){
  const vl=await octokit.rest.pulls.create({
    owner: owner,
    repo: repo,
    head: head,
    base: base,
    title: title
  }).then((res)=>{
    return res;

  });
  return vl;
}
module.exports={getUser,createGithubRepo,createFork,createIssue,deleteRepo,createPull};