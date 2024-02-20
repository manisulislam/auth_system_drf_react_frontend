import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const Profile = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const jwt_access_token = localStorage.getItem("access")

  useEffect(() => {
    if (jwt_access_token === null && !user) {
      navigate("/login")
    }
  }, [])
  return (
    <>
      <div className="text-center my-5">
        <h1>Hi, {user && user.names}</h1>
        <p>Welcome to the Profile page</p>
        <button className="bg-red-500 hover:bg-red-600 my-8 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transform hover:scale-105">Logout
        </button>
      </div>


    </>
  )
}

export default Profile