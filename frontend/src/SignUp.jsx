function SignUp() {
    return (
        <div className="flex items-center flex-col mt-10 gap-3">
            <h1 className="font-bold text-3xl text-blue-600">Join BlogVerse</h1>
            <p className="text-lg text-gray-600 text-center font-semibold">Create your account and <br /> start your  Blogging Journey today</p>
            <form className="flex flex-col items-center border-1 border-gray-400 rounded-sm w-1/3 py-7 gap-3">
                <div className="w-[90%] flex flex-col gap-1">
                    <p className="text-md text-gray-700 font-semibold">FullName</p>
                    <input type="text" placeholder="Enter your FullName" className="border-1 border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-purple-500" />
                </div>
                 <div className="w-[90%] flex flex-col gap-1">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="text" placeholder="Enter your Email" className="border-1 border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-purple-500" />
                </div>
                 <div className="w-[90%] flex flex-col gap-1">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="text" placeholder="Enter your Password" className="border-1 border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-purple-500" />
                </div>
                 <div className="w-[90%] flex flex-col gap-1">
                    <p className="text-md text-gray-700 font-semibold">Confirm PassWord</p>
                    <input type="text" placeholder="Enter your ConfirmPassWord" className="border-1 border-gray-400 rounded-md w-full py-2 px-3 focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex gap-2 border-1 border-gray-800 rounded-md w-[90%] py-2 px-3  items-center justify-center">
                    <input className="h-5 w-5" type="checkbox" name="" id=""/>
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                <button className="bg-purple-900 text-white rounded-xl cursor-pointer w-[90%] px-5 py-1">Create Account</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p>Already have an Account?<span className="text-purple-700">SignIn here</span></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-300 py-4 w-[90%] rounded-xl cursor-pointer">Back To Home</button>
            </form>
        </div>
    )
}
export default SignUp;