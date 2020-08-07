# Express #

## Intro :
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

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




