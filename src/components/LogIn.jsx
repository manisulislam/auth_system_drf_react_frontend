import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

const LogIn = () => {
  const [logInData, setLogInData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = logInData
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const navigate = useNavigate()
  const handleChange = (e) => {
    setLogInData({
      ...logInData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("email and password are required")
    }
    else {
      setIsLoading(true)
      const res = await axios.post('http://localhost:8000/api/v1/auth/login/', logInData)
      const response = res.data
      console.log(response)
      setIsLoading(false)
      const user={
        "email":response.email,
        "names":response.full_name
      }
      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("access",JSON.stringify(response.access_token))
        localStorage.setItem("refresh",JSON.stringify(response.refresh_token))
        navigate("/dashboard")
        toast.success("Login Successful")
      }
      setLogInData({
        email: '',
        password: ''
      })
      setError("")

    }


  }
  return (
    <div>
      <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <p className="text-red-800 p-2">{error ? error : ""}</p>
          {isLoading && (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address:</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={email}
              onChange={handleChange}

              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          </div>


          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
          </div>
          <h3 className="my-3 text-cyan-700 font-semibold">If you have not an account, please <Link to='/' className="text-purple-700">sign up</Link></h3>
          <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default LogIn