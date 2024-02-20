import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"



const VerifyEmail = () => {
  const[otp,setOtp]=useState("")
  const navigate=useNavigate()



  const handleSubmit= async(e)=>{
    e.preventDefault()
    if (otp){
      const res= await axios.post("http://localhost:8000/api/v1/auth/verify-email/",{"otp":otp})
      if (res.status===200){
        navigate("/login")
        toast.success(res.data.message)
      }


    }
    
  }
  return (
    <div>
      <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Verify Your Account</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label htmlFor="otp" className="block text-gray-700">Enter Your OTP code:</label>
                    <input 
                    type="text" 
                    id="otp"
                    name="otp" 
                    required 
                    value={otp}
                    onChange={(e)=>setOtp(e.target.value)}
                    className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full">Verify</button>
            </form>
        </div>
    </div>
  )
}

export default VerifyEmail