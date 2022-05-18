const express = require('express');
const app = express();
app.get('/' , (req,res)=>{
// This will send the JSON data to the client.
	res.json(data);
})
// Server setup
app.listen(8080 , ()=>{
	console.log("server running");
});
