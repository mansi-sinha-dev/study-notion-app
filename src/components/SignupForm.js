import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", password:"", confirmPassword:""
  })
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event){
    setFormData((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
  }
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  
  const [accountType, setAccountType] = useState("student");

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password != formData.confirmPassword) {
        toast.error("Passwords do not match");
        return ;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
        ...formData
    };

    const finalData = {
        ...accountData,
        accountType
    }

    console.log("printing Final account data ");
    console.log(finalData);

    navigate("/dashboard");

}

  return (
    <div>
    {/* student-instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border-b-[0.0001px] border-[#686968]'>
      <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={()=> setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
      </div>
      <form onSubmit={submitHandler}>
      {/* firstname and lastname */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup  className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.0001px] border-[#686968]'
            />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name 
            <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.0001px] border-[#686968]'
            />
          </label>

        </div>
        {/* email address */}
        <div className='mt-[20px]'>
        <label className='w-full mt-[20px]'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address 
            <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="email"
              name='email'
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.0001px] border-[#686968]'
            />
          </label>
        </div>
        

        {/* createpassword and confirm password */}
        <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.0001px] border-[#686968]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[0.0001px] border-[#686968]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
      </form>

    </div>
  )
}

export default SignupForm