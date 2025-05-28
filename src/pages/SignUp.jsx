import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/images/chelab-logo.png"
import googleLogo from "../assets/images/Google-logo.png"
import appleLogo from "../assets/images/apple-logo.png"
import about from '../data/about';

export default function SignUp() {
    return(
        <div>
            <Link to="/"><FontAwesomeIcon icon={faLeftLong} className="absolute left-[24px] top-[12px] text-[24px] cursor-pointer"/></Link>
            <div className="grid grid-cols-2 h-screen font-[Poppins]">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-[48px]">
                        <h1 className="text-5xl font-medium">Get started now</h1>
                    </div>
                    
                    <div className="flex flex-col w-[400px] pb-[24px]">
                        <label htmlFor="email" placeholder="Enter your name" className="text-2xl font-medium mb-2">Name</label>
                        <input type="text" name="name"  className="px-4 py-[12px] rounded-[20px] border border-gray-300 focus:outline-none placeholder-gray-400 text-base"/>
                    </div>
                    <div className="flex flex-col w-[400px] pb-[24px]">
                        <label htmlFor="email" placeholder="Enter your email" className="text-2xl font-medium mb-2">Email address</label>
                        <input type="text" name="email"  className="px-4 py-[12px] rounded-[20px] border border-gray-300 focus:outline-none placeholder-gray-400 text-base"/>
                    </div>
                    <div className="flex flex-col w-[400px] pb-[60px]">
                        <label htmlFor="password" placeholder="Enter your password" className="text-2xl font-medium">Password</label>
                        <input type="password" name="password" minlength="8" className="w-full px-4 py-[12px] rounded-[20px] border border-gray-300 focus:outline-none placeholder-gray-400 text-base"/>
                    </div>
                    
                    <button className="bg-[#00BF63] text-white text-xl px-[140px] py-[10px] cursor-pointer rounded-[20px] w-[400px]">Sign Up</button>
                    
                    <div className="flex my-[24px]">
                        <span className="px-2 text-gray-400 text-sm">Or</span>
                    </div>

                    <div className="flex justify-between gap-4 h-[32px]">
                        <button className="cursor-pointer border w-[190px] py-2 rounded-full flex items-center justify-center gap-2">
                            <img src={googleLogo} alt="Google" className="w-5 h-5" />
                            <span className="text-xs">Sign in with Google</span>
                        </button>
                        <button className="cursor-pointer border w-[190px] py-2 rounded-full flex items-center justify-center gap-2">
                            <img src={appleLogo} alt="Apple" className="w-5 h-5" />
                            <span className="text-xs">Sign in with Apple</span>
                        </button>
                    </div>
                    <p className="text-center text-sm text-black mt-6">Already have an account? <Link to="/login" className="hover:text-[#1AC2EA]">Login</Link> </p>
                </div>

                <div className="bg-[#EEFFF7] flex flex-col justify-center align-center h-screen px-[48px]">
                    <div className="flex align-center justify-center"><img src={logo} alt="Logo" className="max-h-[80%]" /></div>
                    <div className=""><p className="">{about}</p></div>
                </div>
            </div>
        </div>
    )    
}