//Need to create express server.
const express = require('express');

//Need an app using express.
const app = express();

//Http server
app.get('/',(req,res)=>{
    res.send('Hello...Deepesh Welcome to Express World!!!');
});

app.get('/api/courses',(req,res)=>{
    res.send(['BCA','MCA','MBA','BCOM']);
});

app.get('/api/post/:year/:month',(req,res)=>{
    res.send(req.params);
});

/*Need a listener who listen our request.
"process.env.PORT" is used for taking port 
 number dynamically from environment variable.*/
 
const port = process.env.PORT || 4000;
app.listen(port,()=>console.log(`
    Hello World server is on and running at
    http://localhost:${port}
`));