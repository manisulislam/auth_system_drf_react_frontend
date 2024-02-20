
import { NavLink } from 'react-router-dom';
const NavbarStyles=({isActive})=>{
    return {
      fontWight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    }
  }
const Navbar=()=>{
    return <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex">
                        <NavLink exact to="/" style={NavbarStyles} className="text-gray-300 hover:text-white mr-4">Home</NavLink>
                        
                        <NavLink to="/" style={NavbarStyles}  className="text-gray-300 hover:text-white mr-4">Sign up</NavLink>
                        <NavLink to="/login" style={NavbarStyles}  className="text-gray-300 hover:text-white mr-4">Sign In</NavLink>
                        <NavLink to="/dashboard" style={NavbarStyles}  className="text-gray-300 hover:text-white mr-4">profile</NavLink>
                    </div>
                </div>
            </div>
        </nav>

}
export default Navbar;