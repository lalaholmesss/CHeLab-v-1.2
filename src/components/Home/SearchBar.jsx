import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(""); 
  const navigate = useNavigate();

  const menuItems = [   
    { label: "Student", href: "/student" },
    { label: "Researchers", href: "/researchers" },
    { label: "Engineers", href: "/engineers" },
    { label: "Comments", href: "/comments" },
  ];

  const handleSearch = () => {
    if (!page) {
      alert("Please select a field.");
      return;
    }
    navigate(`${page}?q=${encodeURIComponent(query)}`);
  };

  return (
   <div className="max-w-[1720px] bg-[#EEFFF7] px-6 md:px-[40px] py-[32px] flex flex-col font-[Poppins] min-h-screen">
  <h1 className="text-[48px] md:text-[64px] lg:text-[80px] text-[#00BF63] text-center font-semibold mb-12">
    Welcome!
  </h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-[48px] rounded-xl">

    <div className="flex items-center border border-[#AAA5A5] rounded-[16px] w-full max-w-[800px] px-4 py-3 bg-white shadow-sm">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Enter prompt..."
        className="w-full outline-none bg-transparent placeholder-gray-400 text-base"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>

    <button
      onClick={handleSearch}
      className="bg-[#00BF63] border-[#00BF63] text-white border-[3px] rounded-[20px] py-[10px] px-[32px] hover:bg-[#00a655] transition duration-200 shadow-md"
    >
      Search
    </button>
  </div>
</div>

  );
}
