
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignUp, LogIn, ForgetPassword, Profile, VerifyEmail } from './components'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"





function App() {

  return (
    <>

      <Router>
       
        <ToastContainer></ToastContainer>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<SignUp></SignUp>} />
          <Route path='/login' element={<LogIn></LogIn>} />
          <Route path='/forget_password' element={<ForgetPassword></ForgetPassword>} />
          <Route path='/dashboard' element={<Profile></Profile>} />
          <Route path='/otp/verify' element={<VerifyEmail></VerifyEmail>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
