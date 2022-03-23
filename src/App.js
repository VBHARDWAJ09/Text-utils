// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
;
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]=useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=>{
    if(mode =='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Textutils (Drak)';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils (Light)';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "Textutils" aboutText = "About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <Switch>
          <Route exactpath="/">
          <div className="container my-4">
            <TextForm showAlert={showAlert} heading="Enter the text to analyse below  " mode={mode}/>
            </div>
          </Route>
          <Route exactpath="/about">
            <About mode={mode}/>
          </Route>
        </Switch>
    </Router>
    
    {/* <Navbar title = "Textutils" aboutText = "About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4">
      <TextForm showAlert={showAlert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
    </div> */}
    
      {/* <About mode ={mode}/> */}
    </>
  );
}

export default App;
