import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import logo from "../../assets/images/chelab-logo.png"

export default function Header() {
    return(
        <div className="max-w-[1720px] pt-1 mx-[32px] pb-1">
            <div className="flex justify-between items-center">
                <div className="w-40">
                    <img src={logo} alt="Logo" className="w-full h-auto" />
                </div>
                <div>
                    <Navbar />
                </div>
                <div className="flex flex-row justify-between gap-4">
                    <button className="text-[#1AC2EA] border border-[#1AC2EA] bg-transparent hover:bg-[#1AC2EA] hover:text-white py-[8px] px-[16px] rounded-lg m-auto transition-colors duration-200 cursor-pointer"><Link to="/login">Login</Link></button>
                    <button className="text-[#1AC2EA] border border-[#1AC2EA] bg-transparent hover:bg-[#1AC2EA] hover:text-white py-[8px] px-[16px] rounded-lg m-auto transition-colors duration-200 cursor-pointer"><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </div>
    )
}