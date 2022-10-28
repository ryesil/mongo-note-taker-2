import {React,useState} from 'react'
import axios from 'axios';


function Make() {
const [input, setInput]=useState({
    title:'',
    content:''
})


const changeHandler=(e)=>{
const {name,value}=e.target

setInput(prev=>{
return {
    ...prev,
    [name]:value
}
})
}

const clickHandler=function(e){
e.preventDefault();
//we will console first
console.log(input)
//after axios we will post the data instead of consoling
const newNote={
  //we get them from input
  title:input.title,
  content: input.content
}
//we send this data to this address. Go ot newRoute
axios.post("http://localhost:3001/take", newNote);
}

  return (
    <div className='container'>
<form >
    <div className="form-group pt-3 w-25">
    <input onChange={changeHandler} name='title' value={input.title} className="form-control" placeholder='title'/>
    </div>
    <div className="form-group pt-3">
    <textarea onChange={changeHandler} name='content' value={input.content} className="form-control" placeholder='note'/>
    </div>
    <br/>
    <button onClick={clickHandler} className="btn btn-primary btn-lg">Submit</button>
</form>
</div>
  )
}

export default Make