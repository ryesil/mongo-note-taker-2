import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from './components/home/Home';
import Notes from './components/notes/Notes';
import Make from './components/make/Make';


function App() {
  return (
   
<Router>
<NavBar/>
<Routes>
<Route path="/" element={<Home/>}>
  Home
</Route>
<Route path="/notes" element={<Notes/>}>
Notes
</Route>
<Route path="/make" element={<Make/>}>
Make a note
</Route>
</Routes>
</Router>
  );
}

export default App;
