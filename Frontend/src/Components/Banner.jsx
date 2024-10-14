import React from 'react'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col my-10 md:flex-row'>
     <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-24">
     <div className='space-y-8'>
     <h1 className='text-3xl font-bold'>Hello, welcome to the largest online BookStore plateform <span className='text-blue-500'>Book-O-phia</span></h1>
     <p className='text-l'>Your One-Stop Shop for Books That Inspire, Entertain, and Educate! Discover bestsellers, new releases, and timeless classics across a range of genres. Whether you’re a passionate reader or searching for a perfect gift, we have the book for you!</p>

     <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
     </div>
     <button className=" mt-4 btn btn-active btn-secondary hover:border-blue-500 hover:bg-blue-500 bg-blue-500 border-blue-500">Get Started</button>
     </div> 
     <div className=" flex justify-center order-1 md:order-2 w-full md:w-1/2">
     <img src='../img1.png' className='mt-8 md:mt-20 w-60 h-60 md:w-80 md:h-80' alt="" />
     </div>
     </div>
    </>
  )
}

export default Banner
