import chemicals from "../data/chemicals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial, faLink, faBookOpen } from "@fortawesome/free-solid-svg-icons";


export default function ChemicalTable() {
  return (
    <div className="bg-[#EEFFF7] py-[60px]">
        <h1 className="text-[40px] font-semibold text-[#1AC2EA] text-center pb-[60px]"><FontAwesomeIcon icon={faBookOpen} />Articles and Scientific Research</h1>
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-300 ">
      <div className="flex flex-row items-center mb-6 justify-between">
        <FontAwesomeIcon icon={faFlaskVial} className="text-[#1AC2EA] text-[44px] w-1/3"/>
        <FontAwesomeIcon icon={faLink} className="text-[#1AC2EA] text-[44px] w-2/3"/>
      </div>

      <table className="w-full table-auto">
        <tbody>
          {chemicals.map((item, index) => (
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
    </div>
    </div>
  );
}