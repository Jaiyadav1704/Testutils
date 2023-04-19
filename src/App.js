import './App.css';
import React, { useState } from "react";
import Navbar from './Navbar/Navbar';
import TextForm from './Navbar/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <div className="container">
    <TextForm/>
    </div>
    
    </>
  );
}

export default App;
