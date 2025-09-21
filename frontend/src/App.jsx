 
import NavBar from './NavBar'
import './App.css'
import SignUp from './SignUp'
import SignIn from './SingIn'
import Home from './Home.jsx'
import Home1 from './Home1.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Home1/>}/>
    </Routes>
  )
}

export default App
