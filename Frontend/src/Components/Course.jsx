import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from "axios"
import {Link} from 'react-router-dom'
function Course() {
  const [book,setBook]= useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book")
       console.log(res.data);
       setBook(res.data)
       
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'> 
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
          <span className='text-blue-500'> Here! :)</span>
        </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatibus a eius odio dolorum voluptate distinctio. Recusandae harum repellat exercitationem aliquam officiis voluptatibus atque asperiores assumenda cum accusamus quam molestiae impedit, velit mollitia ducimus, nostrum hic similique. Reiciendis ipsam, pariatur rerum exercitationem quis quos quaerat numquam adipisci quia tempore reprehenderit velit commodi cupiditate unde ratione dolore suscipit quod aperiam. Sit ad sed obcaecati quae aliquid, temporibus quia odit aut nam mollitia ab doloribus, earum molestias. Iste quas tempore quis cupiditate quod, neque voluptatibus facilis saepe illum obcaecati. Ad similique veniam, eius placeat labore fugiat vitae alias voluptatem sed id dolores?</p>
        <Link to={'/'}>
        <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300'>Back</button></Link>
      </div>
      <div className='mt-12  grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
