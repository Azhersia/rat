// declares function generating the not found page
const NotFound = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 w-full h-full" >
      <div className='loginBox h-full w-500 mt-9'>
        <div className='loginBox border bg-mainGreen rounded-t-lg h-10 w-500 flex justify-between  px-7 py-1'>
          <p className='text-center w-full'><h1>404 - Page not found</h1></p>
        </div>
        <div className=' h-200 border bg-bgLight border-secondaryShadow rounded-b-lg flex flex-col justify-center items-center gap-5 mb-10'>
          <img className="h-40" src="404-img.png" alt='' />
          <p>This page does not exist please return by pressing the home button</p>
        </div>
      </div>
    </div >
  )
}
//export function
export default NotFound;