import logo from "../assets/images/chelab-logo.png";
import about from "../data/about";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-10 mt-auto px-[40px]">
            <div className="max-w-[1720px] mx-[32px] flex flex-row justify-between align-center ">
                <div className="flex flex-col">
                    <div className="w-40">
                        <img src={logo} alt="Logo" className="w-full h-auto" />
                    </div>
                    <p className="text-black text-sm w-3/4">
                        {about}
                    </p>
                </div>

                <div className=" gap-10 text-sm text-black text-center">
                    <div>
                        <p className="text-[24px] font-semibold mb-2 text-gray-800">Contact</p>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-black transition">Instagram</a></li>
                            <li><a href="#" className="hover:text-black transition">FaceBook</a></li>
                            <li><a href="#" className="hover:text-black transition">X/Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}
