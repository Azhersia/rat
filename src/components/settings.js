import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';
import { useState, useEffect } from "react"

const Settings = () => {

  // function to sign out user
  const userSignOut = () => {
    // firebase signOut function
    signOut(auth).then(() => {
      console.log('sign out successfull')
    }).catch(error => console.log(error))
  }

  const [color, setColor] = useState("#DCEADD")
  // get list from firebase
  function click(color) {
    setColor(color)
  }

  useEffect(() => {
    document.body.style.background = color
  }, [color])

  return (
    <>
      <div id='navContainer' className=''>
        <ul className=' bg-mainGreen list-none overflow-hidden flex justify-evenly'>
          <div id="navbar" className='flex justify-center w-full'>
            <li className='bg-mainGreen w-300 border-r-2 border-secondaryShadow'><Link to="/" className='h-full w-full block text-center px-15 py-5  hover:bg-mainGreenDarker'>Home</Link></li>
            <li className='bg-mainGreen w-300 border-r-2 border-secondaryShadow'><Link to="/Inventory" className='h-full w-full block text-center px-15 py-5 hover:bg-mainGreenDarker'>Inventory</Link></li>
            <li className='bg-mainGreen w-300'><Link to="/Setting" className='h-full w-full block text-center px-15 py-5 hover:bg-mainGreenDarker'>Settings</Link></li>
          </div>
        </ul>
      </div>
      <div className='flex justify-center w-full h-full'>
        <Link to="/Login"><button onClick={userSignOut} id='shadow' className='navButtons float-right rounded-lg h-10 w-40 bg-secondaryGreen m-5 hover:bg-secondaryShadow'>Log out</button></Link>
        <button onClick={
          () => click("#3E463F")
        } id='shadow' className='navButtons float-right rounded-lg h-10 w-40 bg-secondaryGreen m-5 hover:bg-secondaryShadow '><span>darkmode?</span></button>
      </div>

      <div className=" flex flex-col justify-center items-center gap-10 w-full">
        <div className='homePage h-40 w-500'>
          <div className='homePage border border-mainGreen rounded-t-lg h-10 w-500 flex justify-between bg-mainGreen px-7 py-1'>
            <p>email</p>
            <p>id</p>
          </div>
          <div className='h-auto border border-secondaryShadow rounded-b-lg flex flex-col justify-between text-xl px-4 py-4'>
            <div className='flex'>
              <p>Joined: </p><p id='creationDate'>2.2.2022</p>
            </div>
            <p>Rats: 12</p>
          </div>
        </div>
      </div >
    </>
  )
}
// export function
export default Settings;