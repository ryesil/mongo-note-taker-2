import {React,useEffect,useState} from 'react'


function Notes() {
const [notes,setNotes]=useState([{
  title:"1",
  content:"2"
}])

useEffect(()=>{
  fetch("/notes").then(res=>{
    if(res.ok){
      return res.json()
    }
  }).then(jsonRes=>setNotes(jsonRes))
})


  return (
    <div className="container">
      <h2>Notes</h2>
{notes.map(note=> <div key={Math.random()}><div>{note.title}</div>
      <div>{note.content}</div> </div>
  )}

    </div>
  )
}

export default Notes