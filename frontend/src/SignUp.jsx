import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { Lock } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { FolderPen } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';


function SignUp() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "Please enter your Full Name"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your Email"
        }
        if (!formData.password) {
            newErrors.password = "Please enter your Password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your Password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Your both passwords didn't match , check it once"
        }
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("Please fill all the fields")
        // }
        // else if (formData.password !== formData.confirmPassword) {
        //     setError("Your both passwords didn't match , check it once")
        // }
        // else {
        //     setSuccess("Your form is filled and account is created successfully")
        //     setError("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })
        // }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setSuccess("Your form is filled and account is created successfully");
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
    }


    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((password) => !password)
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value

        }))
        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""

        }))





    }
    return (
        <div className="flex items-center flex-col  gap-5">
            <NavBar />
            <h1 className="text-4xl text-blue-800 font-bold">Join BlogVerse</h1>
            <p className="text-xl text-gray-600 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-gray-400 w-1/3 py-7 items-center gap-5 " >
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <div className="relative">
                        <input className=" pl-10 border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-500"

                            value={formData.fullName}
                            onChange={handleChange}
                            name="fullName"
                            type="text"
                            placeholder="Enter Your Full Name" />
                        <FolderPen className="absolute  text-gray-400 top-2 left-2" />
                        {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <div className="relative">
                        <input className=" pl-10 border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-500"

                            value={formData.email}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="Enter Your Email" />
                        <Mail className="absolute  text-gray-400 top-2 left-2" />
                        {errors.email && <p className="text-red-600">{errors.email}</p>}
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative">
                        <input className="pl-10 border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-500"

                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your Password" />
                        <KeyRound className="absolute text-gray-400  top-2 left-2 " />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute text-gray-400  top-2 right-2 " /> : <EyeOff className="absolute text-gray-400  top-2 right-2" />}</p>
                    </div>
                    {errors.password && <p className="text-red-600">{errors.password}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Confirm Password</p>
                    <div className="relative">
                        <input className="pl-10 border-1 border-gray-700 w-full py-2 px-3 rounded-2xl focus:outline-none focus:border-purple-500"

                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Your Password" />
                        <Lock className="absolute text-gray-400  top-2 left-2 " />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute text-gray-400  top-2 right-2 " /> : <EyeOff className="absolute text-gray-400  top-2 right-2" />}</p>
                    </div>
                    {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
                </div>
                <div className="flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-2xl items-center justify-center">
                    <input className="h-5 w-5"
                        required
                        type="checkbox"
                        name=""
                        id="" />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <button type="submit" className="w-[90%] flex justify-center gap-5 bg-purple-900 py-4 text-white rounded-xl font-semibold"> <CircleUser /> <p>Create Account</p></button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4 "></div>
                <p className="text-gray-700 font-semibold">Already have an Account?<Link to="/signin" className="text-purple-700">Sign In Here</Link></p>
                <button className="text-gray-700 font-bold hover:bg-gray-300 rounded-2xl w-[90%] cursor-pointer py-4">Back to Home</button>
            </form>
        </div>
    )

}

export default SignUp;