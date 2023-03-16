// import needed assets
import { Link } from 'react-router-dom';

const NavBar = () => {
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

      <div className=" flex justify-center items-center gap-20 h-full w-full flex-wrap mt-5">
        <div className='h-40 cursor-pointer  '>
          <div className='h-20 border border-secondaryShadow rounded-t-lg flex justify-center items-center text-xl px-4 py-4'>
            <img className='w-2/4 h-full' src='cheese.png' alt='food' />
          </div>
          <div className=' rounded-b-lg h-10 w-40 flex justify-between bg-mainGreen px-7 py-1'>
            <p className='w-full  text-center'>cheese</p>
          </div>
        </div>

        <div className='h-40 cursor-pointer  '>
          <div className='h-20 border border-secondaryShadow rounded-t-lg flex justify-center items-center text-xl px-4 py-4'>
            <img className='w-2/4 h-full' src='cheese.png' alt='food' />
          </div>
          <div className=' rounded-b-lg h-10 w-40 flex justify-between bg-mainGreen px-7 py-1'>
            <p className='w-full  text-center'>cheese</p>
          </div>
        </div>

      </div>
    </>
  )
}
//export function
export default NavBar;