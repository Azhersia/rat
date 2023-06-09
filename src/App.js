// import needed assets
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase.js"
import { useNavigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import LogIn from "./components/Login.js"
import SignUp from "./components/SignUp.js"
import RatPage from "./components/RatPage.js"
import HomePage from "./components/HomePage.js"
import Inventory from "./components/Inventory.js"
import NotFound from "./components/notFound.js"
import Settings from "./components/settings.js"

function App() {
  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
