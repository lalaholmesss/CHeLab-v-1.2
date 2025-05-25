import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/images/CheLab-logo2.png"


export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-10 mt-auto px-[40px]">
            <div className="max-w-[1720px] mx-[32px] flex flex-col md:flex-row justify-between gap-10">
                <div className="flex-1">
                    <div className="w-40">
                        <img src={logo} alt="Logo" className="w-full h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm max-w-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, nisi?
                    </p>
                    <div className="flex gap-5 mt-4 text-2xl">
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-10 text-sm text-gray-600">
                    <div>
                        <p className="text-lg font-semibold mb-2 text-gray-800">Col 1</p>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-black transition">1</a></li>
                            <li><a href="#" className="hover:text-black transition">2</a></li>
                            <li><a href="#" className="hover:text-black transition">3</a></li>
                            <li><a href="#" className="hover:text-black transition">4</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2 text-gray-800">Col 2</p>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-black transition">5</a></li>
                            <li><a href="#" className="hover:text-black transition">6</a></li>
                            <li><a href="#" className="hover:text-black transition">7</a></li>
                            <li><a href="#" className="hover:text-black transition">8</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}
