//Need to create express server.
const express = require('express');

//Need an app using express.
const app = express();

const courses = [
    { id : 1 , name : 'BCA' },
    { id : 2 , name : 'MCA' },
    { id : 3 , name : 'MBA' },
];

//Http server
app.get('/',(req,res)=>{
    res.send('Hello...Deepesh Welcome to Express World!!!');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if(!result){
        res.status(404).
        send("The Course with your given ID was not found");
    }
    else{
        res.send(result);
    }
});

app.get('/api/post/:year/:month',(req,res)=>{
    res.send(req.params);
});

//Query arguments passed in request.

app.get('/api/post/:year/:month',(req,res) => { res.send(req.query); });

/*Need a listener who listen our request.
"process.env.PORT" is used for taking port 
 number dynamically from environment variable.*/
 
const port = process.env.PORT || 4000;

app.listen(port,()=>console.log(`
    Hello World server is on and running at
    http://localhost:${port}
`));