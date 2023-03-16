// import needed assets
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase"
import { useNavigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import LogIn from "./components/Login"
import SignUp from "./components/SignUp"
import RatPage from "./components/RatPage"
import HomePage from "./components/HomePage"
import Inventory from "./components/Inventory"
import NotFound from "./components/notFound"
import Settings from "./components/settings"


function App() {



  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate();


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {     // if there is user, set user move to /
        setAuthUser(user)
        navigate("/")

      } else {        // if no user, set null, move to login
        setAuthUser(null);
        navigate("/Login")
      }
    });
  }, [authUser])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/Inventory' element={<Inventory />} />
        <Route path='/Setting' element={<Settings />} />
        <Route path='/RatPage' element={<RatPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
