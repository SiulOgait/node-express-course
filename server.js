const express = require(`express`);
const app = express();

/* The first line gives you access to the express library by searching your node_modules for "express". The next creates an instance of the express constructor, which we will name "app".
We can now access methods used for making a server by including their name after app. Add this to the bottom of server.js:
 */
app.listen(8000, function() {
    console.log("My first Node.js Server is running")
})

/* The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)

But first we need to run the server.js file by entering this in the terminal: node server.js */