import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar () {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("/");
  const navigate = useNavigate();

  const menuItems = [   
    { label: "Student", href: "/student" },
    { label: "Researchers", href: "/researchers" },
    { label: "Engineers", href: "/engineers" },
    { label: "Comments", href: "/comments" },
  ];
  
  const handleSearch = () => {
    navigate(`/${page}?q=${encodeURIComponent(query)}`);
  };


  return(
      <div className="max-w-[1720px] bg-[#EEFFF7] px-[40px] flex flex-col font-[Poppins] py-[32px]">
          <h1 className="text-[80px] text-[#00BF63]  text-center">Welcome!</h1>

          <div className="flex items-center space-x-4 bg-[#f3fef9] py-[64px]">
              <div className="flex items-center border border-[#AAA5A5] rounded-[16px] w-[1045px] px-4 py-2 bg-white">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-2" />
                  <input
                  type="text"
                  placeholder="Enter prompt..."
                  className="w-full outline-none bg-transparent placeholder-gray-400"
                  onChange={(e) => setQuery(e.target.value)}
                    />
              </div>
              <div className="relative">
                
              <button onClick={() => setOpen(!open)} className="bg-white w-44 text-black px-6 py-2 rounded-[16px] flex items-center gap-2 border border-[#AAA5A5] cursor-pointer">Fields {(open) ?  <FontAwesomeIcon icon={faAngleUp}  className="absolute right-[20px]"/> : <FontAwesomeIcon icon={faAngleDown} className="absolute right-[20px]"/>}</button>
              {open && (
                <div className="absolute w-44 rounded-[16px] bg-white shadow-lg border border-gray-200 z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 hover:bg-gray-100 "
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mb-[200px]">
            <button onClick={handleSearch} className="bg-[#00BF63] border-[#00BF63] text-white border-[3px] rounded-[20px] py-[10px] px-[24px] cursor-pointer">
              Search
            </button>
          </div>
      </div>
  )
}