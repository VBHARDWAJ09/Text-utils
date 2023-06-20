import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import Title from './components/Title';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
;
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  const toggleMode = () => {
    if (mode == 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Textutils (Light)';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Textutils (Dark)';
    }
  }
  return (
    <div className={`${mode}`}>
      <Router>
        <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Title/>
        <Switch>
          <Route exactpath="/">
            <div className="container my-4">
              <TextForm showAlert={showAlert} heading="Enter the text to analyse below  " mode={mode} />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <Navbar title = "Textutils" aboutText = "About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4">
      <TextForm showAlert={showAlert} heading="Try Textutils - Word counter, Character counter, Remove extra spaces" mode={mode}/>
    </div> */}

      {/* <About mode ={mode}/> */}
    </div>
  );
}

export default App;
