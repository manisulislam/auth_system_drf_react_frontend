import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axiosInstance from '../utlils/axiosInstance';
import {toast} from 'react-toastify'


const Profile = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const jwt_access_token = localStorage.getItem("access")

  
  const getSomeData = async ()=>{
    const res=await axiosInstance.get("/auth/test-auth/")
    if (res.status===200) {
      console.log(res.data)
    }
  }
  useEffect(() => {
    if (jwt_access_token === null && !user) {
      navigate("/login")
    }else{
      getSomeData()
    }
  }, [jwt_access_token,user])

  const handleLogout=async ()=>{
    const refresh=JSON.parse(localStorage.getItem("refresh"))
    const res = await axiosInstance.post("/auth/logout/",{"refresh_token":refresh})
    if (res.status === 200) {
      localStorage.removeItem("user")
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")
      navigate("/login")
      toast.success("Logout Successful")
    }

  }


 
  return (
    <>
      <div className="text-center my-5">
        <h1>Hi, {user && user.names}</h1>
        <p>Welcome to the Profile page</p>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 my-8 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transform hover:scale-105">Logout
        </button>
      </div>


    </>
  )
}

export default Profile