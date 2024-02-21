import { useState } from "react"
import { toast } from "react-toastify"
import axiosInstance from "../utlils/axiosInstance"
// import { useNavigate } from "react-router-dom"




const ForgetPassword = () => {


  // const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email) {
      const res = await axiosInstance.post("auth/password-reset/", { "email": email })
      if (res.status === 200) {
        toast.success("A link has to be sent to your email for reset password")

      }
    }
    setEmail("")


  }
  return (
    <div>
      <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700">Enter Your Register Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          </div>
  
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 w-full">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword