import react from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import { useState } from "react";
import { Eye } from 'lucide-react';
function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    return (
        <div className=" flex flex-col items-center justify-center bg-blue-100 ">
            <NavBar />
            <div className="flex flex-col items-center mt-10 sm:w-[50%] lg:w-1/3 gap-1 bg-white border-1 border-white rounded-3xl shadow-4xl  py-4 justify-center ">

                <h1 className="text-2xl font-bold ">Sign In</h1>
                <p className="text-l text-gray-600">Access your account</p>
                <form className="flex flex-col  py-7  items-center gap-5">
                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className=" text-md text-gray-700 w-full font-semibold">Email Address</p>
                        <div className="relative">
                            <input className="pl-10 border-1 border-gray-700 w-full py-2 px-2 rounded-2xl focus:outline-none focus:border-gray-800"
                                type="text"
                                placeholder="sample@gmail.com" />
                            <Mail className="text-gray-400 absolute top-2 left-2" />
                        </div>
                    </div>
                    <div className="w-[90%] flex flex-col gap-2">
                        <p className="text-md text-gray-700 w-full font-semibold">Password</p>
                        <div className="relative">
                            <input className="pl-10 border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-blue-800"
                                type={showPassword ? "text" : "password"}
                                placeholder="sample123" />
                            <p onClick={handlePassword}>{showPassword ? <Eye className="absolute text-gray-400  top-2 right-2 " /> : <EyeOff className="absolute text-gray-400  top-2 right-2" />}</p>
                            <Lock className="text-gray-400 absolute top-2 left-2" />
                        </div>
                    </div>
                    <div className="flex ">
                        <input className="h-4 w-4 gap-2" type="checkbox" />
                        <div className="flex gap-10">
                            <p className="text-gray-700  flex gap-3 font-semibold ">Remember me</p>
                            <p className="text-blue-600 cursor-pointer hover:underline">Forget Password?</p>
                        </div>
                    </div>
                    <button className="pl-6 w-full bg-blue-700 py-4  text-white rounded-xl font-semibold cursor-pointer text-center  hover:bg-blue-800
            ">Sign In</button>

                    <div className="border-[0.5px] border-gray-300 w-[90%] mt-4"></div>
                    <p className="font-semibold text-gray-700">Don't have an account?<Link to="/signup" className="text-purple-700 cursor-pointer hover:underline">Create one here</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignIn;