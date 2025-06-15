import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
    return(
        <nav>
            <div className="flex flex-col h-full fixed top-0 bottom-0 px-[40px] py-[36px]">
                <div><h1 className="text-[26px] font-semibold">Dashboard v.1</h1></div>
                <div className="flex flex-col items-left pt-[64px]">
                    <ul className="flex flex-col gap-[40px]">
                        <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-[9197B3] transition-all duration-300" : "text-[#9197B3] hover:text-[#1AC2EA] text-[14px] transition-all duration-300"
                        }>Dashboard</NavLink>
                        </li>
                        <li>
                        <NavLink to="/researchers" className={({ isActive }) =>
                            isActive ? "text-[#1AC2EA] transition-all duration-300" : "text-[#9197B3] hover:text-[#1AC2EA] text-[14px] transition-all duration-300"
                        }>Substance</NavLink>
                        </li>
                        <li>
                        <NavLink to="/admin/requests" className={({ isActive }) =>
                            isActive ? "text-[#1AC2EA] transition-all duration-300" : "text-[#9197B3] hover:text-[#1AC2EA] text-[14px] transition-all duration-300"
                        }>Requests</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}