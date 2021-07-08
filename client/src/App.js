import React, { useReducer,createContext  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar'; 
import Routes  from './Routes';
const App = () => {
    return (
      <>
        <Navbar />
        <Routes />
      </>
    );
}

export default App;