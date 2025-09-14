function NavBar(){
    return(
        <div className="flex justify-around h-16 items-center border-2 border-gray-300 bg-gray-50">
            <h1 className="3xl font-bold">BlogVerse</h1>
            <button className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-2xl ">Home</button>
            <div className="flex gap-4">
                <button className="font-semibold text-gray-800 cursor-pointer ">Sign In</button>
                <button className="bg-blue-600 text-white rounded-xl cursor-pointer px-5 py-1">Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar;