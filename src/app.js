const express=require('express');
const app=express();
require("./config/database");
app.listen(7777,()=>{console.log("server is running on port 7777")});