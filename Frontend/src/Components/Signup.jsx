import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
function Signup() {
  const location = useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password:data.password,
        }
      await axios.post("http://localhost:4001/user/signup",userInfo)
       .then((res)=>{
        console.log(res.data);
        if(res.data){
          toast.success('Welcome! Your account has been created successfully');
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
       }).catch((err)=>{
        if(err.response){
          console.log(err);
          toast.error("Error: "+ err.response.data.message);
          
        }
       })
      };
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input {...register("fullname", { required: true })} type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br />
        {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input {...register("email", { required: true })} type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br />
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input {...register("password", { required: true })} type="text" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' />
        <br />
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 cursor-pointer duration-200'>Signup</button>
        <p>Have an account? <Link to={'/'} className='text-blue-500 underline cursor-pointer'>Log-in</Link>{" "}</p>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup
