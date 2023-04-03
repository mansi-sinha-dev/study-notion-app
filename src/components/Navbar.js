import React from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg";
import LoginForm from './LoginForm';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn =props.setIsLoggedIn;
  return (
    <div className=' flex justify-between items-center w-11/12 max-w-[1160px] py-5 mx-auto'>
        <Link to="/">
            <img src={Logo} alt="logo" width={160} height={32} loading="lazy" ></img>
        </Link>

        <div>
            <ul className=' text-white flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>

        <div className=' flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className=' bg-richblack-800 border border-richblack-700 rounded-[8px] py-[8px] px-[12px] text-richblack-100'>Log in</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button
                     className=' bg-richblack-800 border border-richblack-700 rounded-[8px] py-[8px] px-[12px] text-richblack-100'>Sign up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className=' bg-richblack-800 border border-richblack-700 rounded-[8px] py-[8px] px-[12px] text-richblack-100'>
                    Log out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button  className=' bg-richblack-800 border border-richblack-700 rounded-[8px] py-[8px] px-[12px] text-richblack-100'>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar