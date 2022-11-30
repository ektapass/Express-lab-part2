const express = require('express');

// Creating our express app
const app = express();
const port = 3000;

// Defining a "root" route directly on app
app.get('/',  (req, res)=> {
  res.send('99 bottles of beer on the wall'+" "
  +`<a href="/98"> take one down, pass it around</a>`);
});

app.get('/:number_of_bottles',(req,res)=>{
  if(req.params.number_of_bottles<=0){
    res.send(`<a href= "/">Start Over</a> you have ${req.params.number_of_bottles} bottles left,`)
  
}else{
  res.send(`${req.params.number_of_bottles}bottles of beer on the wall,<a href= "/${req.params.number_of_bottles-1}">take one down,pass it around</a>`)
}
})


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});