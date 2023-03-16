// import needed assets
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { db } from "./firebase.js"
import { ref } from "firebase/database"
import { useList } from 'react-firebase-hooks/database';

// declares function generating the HomePage
const HomePage = () => {

  // get list from firebase
  const [snapshots, loading, error] = useList(ref(db, '/Ratlist'));
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

        <button id='shadow' className='navButtons float-right rounded-lg h-10 w-40 bg-secondaryGreen m-5 hover:bg-secondaryShadow '><span>Spawn Rat</span></button>

      </div>

      <div className=" flex flex-col justify-center items-center gap-10 w-full">
        <div className=' homePage h-auto w-300 '>
          <div className='homePage h-10 w-300 bg-mainGreen rounded-t-lg text-xl px-3 py-1 '>
            <p>Rats</p>
          </div>
          <div className="border border-secondaryShadow rounded-b-lg mb-10">
            <div className="h-full w-full flex justify-center items-center image.pngs-center flex-col gap-5 ">

              <Link to="/RatPage">
                {error && <strong>Error: {error}</strong>}
                {loading && <span>Loading...</span>}
                <div className='flex flex-col gap-2'>
                  {!loading && snapshots &&
                    snapshots.map((rat, index) => (
                      <>
                        <div key={rat.key} className="cursor-pointer my-2 bg-secondaryGreen flex flex-row justify-between items-center h-10 w-40 rounded-lg">
                          <div className="flex flex-row w-10 m-5">
                            {rat.val().name}
                          </div>
                          <img className=' h-7' src='leaf.png' alt='foraging' />
                        </div>
                      </>
                    ))}
                </div>
              </Link>

            </div>
          </div>
        </div >
      </div >
    </>
  )
}
// export function
export default HomePage;