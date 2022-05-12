import './App.css';
import React, { useState } from 'react'
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
// React-route-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been successfully enabled", "Success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#11233e';
      showAlert("Dark mode has been successfully enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* React-router */}
          <Routes>
            <Route path="/about" element={<About />}/>
             
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
