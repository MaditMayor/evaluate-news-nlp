# News Article Analyzer
This is an app that uses Natural Language Processing
# Project Instructions
The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# Setting up the API
The Aylien/MeaningCloud API
Install a node module to run certain commands through.

# Signup for an API key
For the MeaningCloud API**: You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.

For the MeaningCloud API**, you may need to install the [form-data](https://www.npmjs.com/package/form-data) module to follow its [JavaScript example](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools).

# Environment Variables
Declare API keys to look something like this:

var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});

Use npm or yarn to install the dotenv package `npm install dotenv`
Create a new `.env` file in the root of your project
Go to your .gitignore file and add `.env` this will make sure that we don't push our environment variables to Github!
Fill the .env file with your API keys like this:
API_ID=**************************
API_KEY=**************************
Add this code to the very top of your server/index.js file
const dotenv = require('dotenv');
dotenv.config();
Reference variables you created in the .env file by putting `process.env` in front of it, to look like this:

console.log(`Your API key is ${process.env.API_KEY}`);

This means that the updated API credential settings will look like this:

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

# Getting started
cd into your new folder and run:
npm install
if you face problem use this:
npm install --legacy-peer-deps

To run Server side on dev environment:
npm run start
this will run serve on port (http://localhost:3000/)

To run client side use:
npm run build-dev  
you can now check this url to access the project
http://localhost:3000/
