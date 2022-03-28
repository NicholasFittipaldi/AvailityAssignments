import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import HomePageComponent from './components/HomePageComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
  const [loggedInUser, setUser] = useState("Default");
  const [tableValues, addValues] = useState([]);

  // useEffect(() => {
  //   setUser(localStorage.getItem('loggedInUser'));
  // }, [])

  return (
      <Router>
          <Routes>
            <Route exact path='/' element={<LoginComponent tableValues={tableValues}/>}></Route>
            <Route exact path='/homePage' element={<HomePageComponent value={loggedInUser} tableValues={tableValues} setUser={setUser}/>}></Route>
            <Route exact path='/register' element={<RegisterComponent addValues={addValues}/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
