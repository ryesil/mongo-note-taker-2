const express=require("express");
const router=express.Router();// uses express Router method
const Note=require("../models/notemodel");

//Below is for posting
//configure Router to get and send data to the database
//This will be done later for now just export
router.route("/take").post((req,res)=>{
    //parse the request 

    const title=req.body.title;
    const content=req.body.content;
    //we make a new note in the above Note model
    const newNote = new Note({
        title,
        content
    })

    //take the newNote and call the mongoose method save
    newNote.save();
});

//We need another route for getting
//After this go to notes
router.route("/notes").get((req,res)=>{
    Note.find().then(foundNotes=>res.json(foundNotes))
})



module.exports=router;


