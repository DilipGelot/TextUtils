import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled ", "success");
    }
  }
  const toggleMode1 = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#dbe300'
      showAlert("Yellow mode has been enabled ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled ", "success");
    }
  }
  const toggleMode2 = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#91362a'
      showAlert("Red mode has been enabled ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled ", "success");
    }
  }
  const toggleMode3 = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#32964b'
      showAlert("Green mode has been enabled ", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled ", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
      <Alert alert={alert}/>
      <div className="container my-5">
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
        {/* <About/> */}
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
    
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
