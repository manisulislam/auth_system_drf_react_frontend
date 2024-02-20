import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div>
      <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            <form >
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email Address:</label>
                    <input type="text" id="email" name="email"  required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="first_name" className="block text-gray-700">First Name:</label>
                    <input type="email" id="first_name" name="first_name" required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="last_name" className="block text-gray-700">Last Name:</label>
                    <input type="email" id="last_name" name="last_name" required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirm_password" className="block text-gray-700">Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" required className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-md py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
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