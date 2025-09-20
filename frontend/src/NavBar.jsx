import {Link} from "react-router-dom"
function NavBar(){
    return(
        <div className="flex justify-around h-16 w-full items-center border-2 border-gray-300 bg-gray-50">
            <h1 className="3xl font-bold">BlogVerse</h1>
            <Link to="/home1" className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-2xl ">Home</Link>
            <div className="flex gap-4">
                <Link to="/signin" className="font-semibold text-gray-800 cursor-pointer ">Sign In</Link>
                <Link to="/signup" className="bg-blue-600 text-white rounded-xl cursor-pointer px-5 py-1">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar;