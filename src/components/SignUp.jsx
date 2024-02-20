import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"




const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",

    })

    const [error, setError] = useState("")

    const { email, first_name, last_name, password, password2 } = formData

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !first_name || !last_name || !password || !password2) {
            setError("Please fill in all fields")
        }
        else {
            console.log(formData);
            // make call to api
            const res = await axios.post("http://localhost:8000/api/v1/auth/register/", formData)
            // check our response
            const response = res.data
            if (res.status === 201) {

                // redirect to verify component
                navigate("/otp/verify")
                toast.success(response.message)

            }
            // server pass to error
            setFormData({
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                password2: ""
            });
            setError("");



        }

    }

    return (
        <div>
            <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSubmit} >
                    <p className="text-red-800 p-2">{error ? error : ""}</p>
                    <div className="mb-4">

                        <label htmlFor="email" className="block text-gray-700">Email Address:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleOnChange}
                            id="email"
                            name="email"
                            required
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-gray-700">First Name:</label>
                        <input
                            type="text"
                            value={first_name}
                            onChange={handleOnChange}
                            id="first_name"
                            name="first_name"
                            required
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            value={last_name}
                            onChange={handleOnChange}
                            id="last_name"
                            name="last_name"
                            required
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handleOnChange}
                            id="password"
                            name="password"
                            required
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password:</label>
                        <input
                            type="password"
                            value={password2}
                            onChange={handleOnChange}
                            id="password2"
                            name="password2"
                            required
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>

                    <button type="submit" className="bg-green-500  text-white py-2 px-4 rounded-md w-full">Sign Up</button>
                </form>


                <h3 className="my-3 text-cyan-700 font-semibold">Already have an account, please <Link to='login' className="text-purple-700">Log In</Link></h3>

                <h3 className="text-center my-4">OR</h3>

                <div className="border-b border-gray-300 my-4"></div>

                <div className="flex gap-5 justify-around align-middle">
                    <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 transition duration-300 ease-in-out transform hover:scale-105 hover:to-purple-400 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        Sign in With Google</button>


                    <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                        Sign in With Github</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp