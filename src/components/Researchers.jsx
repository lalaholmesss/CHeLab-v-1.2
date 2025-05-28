import chemicals from "../data/chemicals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial, faLink, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function ChemicalTable() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter by name (you can add more fields if needed)
  const filteredChemicals = query
    ? chemicals.filter((item) => item.name.toLowerCase().includes(query))
    : chemicals;

  return (
    <div className="bg-[#EEFFF7] py-[60px]">
      <h1 className="text-[40px] font-semibold text-[#1AC2EA] text-center pb-[60px]">
        <FontAwesomeIcon icon={faBookOpen} /> Articles and Scientific Research
      </h1>
      
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300">
        <div className="flex flex-row items-center mb-6 justify-between">
          <FontAwesomeIcon icon={faFlaskVial} className="text-[#1AC2EA] text-[44px] w-1/3" />
          <FontAwesomeIcon icon={faLink} className="text-[#1AC2EA] text-[44px] w-2/3" />
        </div>

        {filteredChemicals.length === 0 ? (
          <p className="text-xl text-center text-gray-500">No results found for "{query}"</p>
        ) : (
          <table className="w-full table-auto">
            <tbody>
              {filteredChemicals.map((item, index) => (
                <tr key={index} className="border-b border-[#AAA5A5]">
                  <td className="w-1/3 font-semibold text-black text-[24px] px-6 py-[60px] align-center text-center">
                    {item.name}
                  </td>
                  <td className="w-2/3 px-[160px] py-4 space-y-2">
                    {item.links.map((link, i) => (
                      <div key={i}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:underline break-all align-center text-center"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
