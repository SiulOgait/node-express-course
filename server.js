const express = require(`express`);
const app = express();


/* A POST request can send data securely through the request body. In order to make POST requests, first we need to include the "body-parser" library from our node_modules (included with express). Add these lines */
const bodyParser = require(`body-parser`);
app.use(bodyParser.json);

/* The first line gives you access to the express library by searching your node_modules for "express". The next creates an instance of the express constructor, which we will name "app".
We can now access methods used for making a server by including their name after app. Add this to the bottom of server.js:
 */

const mockUserData = [
    { name: 'Ogait' }, { name: 'Siul' }
];


//This function will respond to a GET request at http://localhost:8000/users with a JSON file, which includes our mockData under the key 'users'.
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'We successfully got your users. Very Nice Ogait!',
        users: mockUserData
    })
})


//In Express, words with a colon in front of them in the url are treated as variables. You can access the value of each variable through req.params, like this:
app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'Ogait we got one user. Check the Git Bash terminal!',
        users: mockUserData
    })

})

app.post('/login', function(req, res) {
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;

    // This should come from the database
    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }

})

app.listen(8000, function() {
    console.log("My first Ogait Node.js Server is running")
})

/* The app.listen method will start up the server locally on the port you give as its first argument (in this case the base url is: http://localhost:8000)

But first we need to run the server.js file by entering this in the terminal: node server.js */