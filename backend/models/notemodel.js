const mongoose=require("mongoose");
const noteSchema={
    title:String,
    content:String
}

const Note=mongoose.model("Note",noteSchema);


//after we export this model we are ready to import this model in route
module.exports=Note;