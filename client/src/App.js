import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import About from "./components/about";
import { useState } from "react";
 
const App = () => {
  const [giver, setGiver] = useState('')
  const global = (value) => {
    // console.log('ggggg',value)
    setGiver(value)
  };
 return (
   <div>
     <Navbar global={global}/>
     <Routes>
       <Route exact path="/" element={<RecordList giver={giver}/>} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/about/:id" element={<About />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default App;