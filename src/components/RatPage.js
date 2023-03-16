// import needed assets
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

//  function to generating the RatPage
const RatPage = () => {

  // firebase signOut function
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successfull')
    }).catch(error => console.log(error))
  }
  return (
    <>
      <div id='navContainer' className=''>
        <ul className=' bg-mainGreen list-none overflow-hidden flex justify-evenly'>
          <div id="navbar" className='flex justify-center w-full'>
            <li className='bg-mainGreen w-300 border-r-2 border-secondaryShadow'><Link to="/" className='h-full w-full block text-center px-15 py-5  hover:bg-mainGreenDarker'>Home</Link></li>
            <li className='bg-mainGreen w-300'><Link to="/Inventory" className='h-full w-full block text-center px-15 py-5 hover:bg-mainGreenDarker'>Inventory</Link></li>
          </div>
        </ul>
      </div>

      <div className='flex flex-col items-end w-full'>
        <Link to="/Login"><button onClick={userSignOut} id='shadow' className='navButtons float-right rounded-lg h-10 w-40 bg-secondaryGreen mr-5 mt-4 mb-4 hover:bg-secondaryShadow'>Log out</button></Link>

      </div>

      <div className='ratInfoContainer flex justify-evenly items-center'>
        <div className=' flex flex-col items-center'>
          <div id='shadow' className='h-150 w-full flex items-center justify-center bg-secondaryGreen '>
            <div className='flex flex-col'>
              <img className='h-full' src='ratIMG.png' alt='rat img' />
            </div>
          </div>
          <div className='playFeedButton mt-10 flex gap-5 mb-10'>
            <button id='shadow' className='rounded-lg h-10 w-40 bg-secondaryGreen hover:bg-secondaryShadow'>play</button>
            <button id='shadow' className='rounded-lg h-10 w-40 bg-secondaryGreen hover:bg-secondaryShadow'>feed</button>
          </div>
        </div>

        <div id='shadow' className='infoBox bg-secondaryGreen h-100 w-200 flex flex-col justify-center items-center'>
          <h1 className='border-b-2 border-secondaryShadow mt-3'>Name</h1>
          <div className='h-full w-3/4 m-3 flex flex-col items-start '>
            <p className='pl-5'>Age</p>
            <hr className='border bg-secondaryShadow border-secondaryShadow w-full mb-5' />
            <div className='flex flex-col items-center justify-center w-full h-full'>
              <p className='mb-4'>Happiness: 20/100</p>
              <p >Hunger: 70/100</p>
              <hr className='border bg-secondaryShadow border-secondaryShadow w-full mt-5 mb-5' />
            </div>
            <div className='h-full w-full flex flex-col gap-4 justify-center items-center'>
              <button id='shadow' className='rounded-lg h-10 w-40 bg-thirdGreen hover:bg-secondaryShadow'>Send foraging</button>
              <button id='shadowRed' className='rounded-lg h-10 w-40  bg-chaseRed hover:bg-shadowRed'>Chase away</button>
            </div>
          </div>
          <p className='text-xs pl-4 pb-2 w-full pt-5'>11/22/2021</p>
        </div>
      </div>
    </>
  )
}
// export function
export default RatPage;