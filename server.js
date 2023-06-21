const express = require("express");//This line imports the Express module, which is a popular web framework for Node.js applications. 
const app = express();// creates an instance of the Express application
const bodyParser =require("body-parser");
//get method:what should happen when a browser get in touch with server

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/project.html');
})
// This code sets up a route for the root URL ("/") using the HTTP GET method( method for fetching data from a server).
// When a request is made to the root URL, the callback function specified in the second argument will be executed
// The callback function takes two parameters: req (short for request) represents the incoming request from the client,
//  and res (short for response) is the response object that we'll use to send a response back to the client.

  app.use(express.static(__dirname));
  app.use(bodyParser.urlencoded({extended:true}));

app.post('/',(req,res)=>{
  const fname=req.body.fname;
  const lname=req.body.lname;
  const email=req.body.email;
  console.log(fname ,lname, email);
  res.sendFile(__dirname + '/main.html');
});


// This code starts the server and tells it to listen on port 3000 for incoming requests. The callback function specified 
// here will be executed once the server starts successfully, and it logs a message to the console indicating that the server has started.
app.listen(3000, ()=> {
    console.log("server started on port 3000"); 
});
