import chemicals from "../../data/chemicals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function DisplayInfo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter chemicals based on query (match by name)
  const filteredChemicals = query
    ? chemicals.filter((item) => item.name.toLowerCase().includes(query))
    : chemicals;

  return (
    <div className="bg-[#EEFFF7] px-[40px] py-10 flex flex-col items-center gap-[80px]">
      <div className="flex flex-row gap-[100px] justify-center max-w-[1720px] w-full">
        <div className="flex flex-col items-center w-[560px]">
          <p className="text-[#1AC2EA] text-[50px] mb-[24px] font-semibold">Substance</p>
        </div>
        <div className="flex flex-col items-center w-[560px]">
          <p className="text-[#1AC2EA] text-[50px] mb-[24px] font-semibold">Information</p>
        </div>
      </div>

      {filteredChemicals.length === 0 ? (
        <p className="text-xl text-gray-500">No results found for "{query}"</p>
      ) : (
        filteredChemicals.map((item, index) => (
          <div key={index} className="flex flex-row gap-[100px] justify-center max-w-[1720px] w-full">
            <div className="flex flex-col items-center w-[560px]">
              <div className="flex flex-col bg-white py-[40px] px-[48px] rounded-[24px] shadow-lg h-[500px] w-full justify-between">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg h-[240px] object-cover"
                />
                <p className="text-2xl font-semibold mt-4">{item.name}</p>
                <div className="text-base text-black mt-4 space-y-2">
                  <p>
                    <span className="font-medium text-[#7F7F7F] pr-[24px]">Type:</span>{" "}
                    {item.type}
                  </p>
                  <p>
                    <span className="font-medium text-[#7F7F7F] pr-[24px]">Prod:</span>{" "}
                    {item.prod}
                  </p>
                  <p>
                    <span className="font-medium text-[#7F7F7F] pr-[24px]">Cond:</span>{" "}
                    {item.cond}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-[560px]">
              <div className="border border-dashed border-[#00BF63] bg-transparent p-[32px] rounded-[24px] h-[500px] w-full leading-relaxed flex flex-col justify-between">
                <p className="text-base">{item.description}</p>
                <button className="mt-6 bg-[#00BF63] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#00a653] w-fit self-start cursor-pointer">
                  <FontAwesomeIcon icon={faDownload} /> CSV
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
