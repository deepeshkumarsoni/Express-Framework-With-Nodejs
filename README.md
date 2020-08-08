# Express #

## Intro :
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# Topics Cover In This Project :
* REST Full Method(How to handle it) : 

  * GET
  * PUT
  * POST
  * DELETE 
* Environmet Variable
* Route Parameters
* Query Parameters
* Nodemon

## Know The Things First :

- Firstly , we need to install Node.js on your machine from (https://nodejs.org/en/download/).

- Secondly , we need to install package.json file in your project folder that we learn later.

- Thirdly , we need to install Express on your project folder.

- Fourthly , we need to install Nodemon on our project that we will see later.

## Configure Our Project :

Step 1 - We need to install package.json file in our project by running following cmd.
```
npm init --yes or --y
```

Step 2 - We need to install express in our project by running following cmd.
```
npm install express -S
```

Step 3 - We need to install Nodemon in our project by running following cmd.
```
npm install -g nodemon
```

## Building Our Project

 We need to go index.js file and write the code for running express server.

* We need to create express server.
    ```
    const express = require('express');
    ```
    
Note : When we do above step it will return a function i.e express().  Here, 'require' is a function when we call it , it will go to the node module and export express module in index.js file.  

* We need an app using express.
   ```
   const app = express();
   ```

Note : The 'express()' is a top-level function exported by the express module. It creates an Express Application.

* We need to create an request for http server.
```
app.get('/',(req,res) => { res.send('Hello...Deepesh Welcome to Express World!!!'); });
```
Note : Get method is used to call http server. It will take 2 arguments:

1. Url.
2. CallBack Function. 

* Display all the values of an array list.
```
app.get('/api/courses',(req,res) => {
    res.send(['BCA','MCA','MBA','BCOM']);
});
```
Note : Here , req and res are two types of object parameters which will return an object.


* Multiple arguments passed in request.
```
app.get('/api/post/:year/:month',(req,res) => { res.send(req.params); });
```
* Query arguments passed in request.
```
app.get('/api/post/:year/:month',(req,res) => { res.send(req.query); });
```


* Need a listener who listen our request. 
``` 
const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`Hello World server is on and running at http://localhost:${port} `));
```
Note : "process.env.PORT" is used for taking port 
 number dynamically from environment variable.

# Running Our Project :

* Step 1 -  Open cmd prompt or powershell in your code editor.

* Step 2 - Type the follwing cmd :
```
node index.js
```
* It will run the server and you will see the link like this :
```
 Hello World server is on and running at
    (http://localhost:4000)
```
* Press Ctrl and on it . A browser will open in which u can see ui.

# Running Our Project Using Nodemon :

### "Nodemon"  is used to restart the server again and again automatically when any changes have been detected in the project files.

* Step 1 -  Open cmd prompt or powershell in your code editor.

* Step 2 - Type the follwing cmd :
```
nodemon index.js
```
* It will run the server and you will see the link like this :
```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`

 Hello World server is on and running at
    (http://localhost:4000)
```
* Press Ctrl and on it . A browser will open in which u can see ui.
