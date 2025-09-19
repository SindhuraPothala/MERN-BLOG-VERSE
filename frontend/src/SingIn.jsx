function SignIn() {
    return (
        <div className="flex items-center justify-center bg-violet-50">
            <div className="flex items-center justify-center flex-col border-2 py-3 border-white rounded-3xl shadow-violet-300 bg-white gap-3 mt-10 w-1/3">
                <h1 className="font-bold text-2xl">Sign In</h1>
                <p className="text-gray-500">Access your account</p>
                <form >
                    <div className="w-full flex flex-col gap-2 mt-2">
                        <p className="text-md text-gray-700 font-semibold">Email Address</p>
                        <input type="text" placeholder="sample@gmail.com" className="border-1 border-gray-400 rounded-lg w-full py-3 px-7 focus:outline-none focus:border-blue-600 " />
                    </div>
                    <div className="w-full flex flex-col gap-2 mt-2">
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <input type="text" placeholder="sample123" className="border-1 border-gray-400 rounded-lg w-full py-3 px-9 focus:outline-none  focus:border-blue-600" />
                    </div>
                    <div className="w-full flex flex-row gap-2 mt-5 ">
                        <input className="h-4 w-4 gap-2" type="checkbox" />
                        <div className="flex gap-9">
                            <p className="font-semibold text-sm text-gray-800">Remember me</p>
                            <p className="flex font-semibold text-sm text-blue-700 cursor-pointer hover:underline">Forgot Password?</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-6">
                        <button className="bg-blue-800 text-white rounded-xl cursor-pointer w-full px-5 py-3 hover:bg-blue-900">Sign In</button>
                    </div>
                    <div className="border-[0.5px] border-gray-300 w-[90%] mt-6"></div>
                    <p className="text-gray-800 mt-4 text-center">Don't have an account?<span className="text-blue-700 font-semibold cursor-pointer hover:underline">Create one here</span></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn;