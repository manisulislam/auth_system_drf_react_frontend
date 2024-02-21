import { useState, useParams } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import axiosInstance from '../utlils/axiosInstance'


const ResetPassword = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {uid,token} = useParams()
    const [newPassword, setNewPassword] = useState({
        password: "",
        confirm_password: ""
    })
    const { password, confirm_password } = newPassword;
    const handleChange = (e) => {
        setNewPassword({ ...newPassword, [e.target.name]: e.target.value })
    }

    const data = {
        "password": password,
        "confirm_password": confirm_password,
        "uidb64": uid,
        "token": token
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const res = await axiosInstance.patch('/auth/set-new-password', data)
        setIsLoading(false)
        const response = res.data
        if (res.status === 200) {

            toast.success(response.message)
            navigate("/login")
        }
        setNewPassword({
            password: "",
            confirm_password: ""
        })
        setError("")
    }


    return (
        <div>
            <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Reset Your Password</h2>
                <form onSubmit={handleSubmit}>
                    <p className="text-red-800 p-2">{error ? error : ""}</p>
                    {isLoading && (
                        <div className="flex items-center justify-center h-screen">
                            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
                        </div>
                    )}



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
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Confirm Password:</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            required
                            value={confirm_password}
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>


                    <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default ResetPassword;