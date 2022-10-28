const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");


app.use(cors());

//to parse the request comming from the frontend
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb://localhost:27017/noteDB")


//require route
app.use("/", require("./routes/noteRoute"))
//after above step it is time to send data from take a note page to our route then to our server and then to mongoDB

app.listen(3001, function(){
    console.log("express server is running on port 3001");
})



