import React from 'react'
import Login from './Login'



function Cards({item}) {
  
  return (
    <>
      <div className='mt-5 my-3'>
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-blue-500 border-blue-500">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline px-4 py-4 ">₹{item.price}</div>
      
      {/* <div className="badge badge-outline hover:bg-blue-500 hover:text-white px-4 py-4 duration-200 cursor-pointer">{`${item.price}` ? 'Login' : 'Buy Now'}</div> */}
      <div className="">
  <a className="badge badge-outline hover:bg-blue-500 hover:text-white px-4 py-4 duration-200 cursor-pointer" onClick={()=>document.getElementById("my_modal_3").showModal()}>Read Free</a>
  <Login/>
</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
