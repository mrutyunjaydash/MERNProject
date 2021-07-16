import React, { useReducer,createContext  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar'; 
import Routes  from './Routes';
import { initialState,reducer } from './reducer/UseReducer';

export const UserContext = createContext();

const App = () => {
    const [state,dispatch] = useReducer(reducer,initialState);
      return (
      <>
        <UserContext.Provider value={{state,dispatch}}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </>
    );
}

export default App;