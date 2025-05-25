import chelabLogo from "../assets/images/chelab-logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightToBracket, faHouse } from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

export default function Navbar(){
    const path = useLocation().pathname;
    return(
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between border-b-[#AAA5A5] border-[2px] px-[40px]">
                <div><img src={chelabLogo} alt="Logo" /></div>
                <div className="flex flex-row gap-[36px]">
                    <button className="border-[#00BF63] text-[#00BF63] border-[3px] rounded-[20px] py-[10px] px-[24px] cursor-pointer"><Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} className="pr-[8px]"/>Login</Link></button>
                    <button className="bg-[#00BF63] border-[#00BF63] text-white border-[3px] rounded-[20px] py-[10px] px-[24px] cursor-pointer"><Link to="/signup"><FontAwesomeIcon icon={faUser} className="pr-[8px]"/>Register</Link></button>
                </div>
            </div>
            <div className="shadow-md shadow-[#AAA5A5] text-center">
                <h1 className="text-[#1AC2EA] text-[24px] font-semibold">{path.charAt(1).toUpperCase() + path.slice(2)}</h1>
            </div>
        </div>
    )
}