import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import chemicals from "../../data/chemicals";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
    const [openSubstance, setOpenSubstance] = useState(false);
    const [openDiagram, setOpenDiagram] = useState(false);

    const [selectedSubstance, setSelectedSubstance] = useState(null);
    const [selectedDiagram, setSelectedDiagram] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = () => {
        if(selectedDiagram && selectedSubstance) {
            navigate(`/engineers/${selectedSubstance.name}/${selectedDiagram}`);
        }
    }

    return (
        <div className="flex flex-col gap-100px items-center justify-centerbg-[#EEFFF7]">
            <div className="relative">
                <button
                    onClick={() => setOpenSubstance(!openSubstance)}
                    className="border border-[#AAA5A5] cursor-pointer bg-white rounded-[50px] p-[20px] text-[20px] text-[#00BF63] font-semibold flex items-center justify-between gap-[12px] w-[250px]"
                >
                    <p>Select Substance</p>
                    {openSubstance ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </button>

                {openSubstance && (
                    <div className="absolute mt-2 w-[250px] max-h-[300px] overflow-y-auto z-10 rounded-[20px] bg-white shadow-lg border border-[#AAA5A5]">
                        <ul className="items-center">
                            {chemicals.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-[16px] hover:bg-[#00BF63] hover:text-white cursor-pointer" onClick={() => {
                                        setSelectedSubstance(item);
                                        setOpenSubstance(false);
                                    }}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="relative">
                <button
                    onClick={() => setOpenDiagram(!openDiagram)}
                    className="border border-[#AAA5A5] cursor-pointer bg-white rounded-[50px] p-[20px] text-[20px] text-[#00BF63] font-semibold flex items-center justify-between gap-[12px] w-[250px]"
                >
                    <p>Select</p>
                    {openDiagram ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </button>
                {openDiagram && (
                    <div className="absolute mt-2 w-[250px] max-h-[300px] overflow-y-auto z-10 rounded-[20px] bg-white shadow-lg border border-[#AAA5A5]">
                        <ul className="items-center">
                           
                                <li className="px-4 py-[16px] hover:bg-[#00BF63] hover:text-white cursor-pointer"   onClick={() => {
                                        setSelectedDiagram(type);
                                        setOpenDiagram(false);
                                    }}>Production Process</li>
                                <li className="px-4 py-[16px] hover:bg-[#00BF63] hover:text-white cursor-pointer">PFD</li>
                        </ul>
                    </div>
                )}
            </div>

            <button
                onClick={handleNavigate}
                disabled={!selectedSubstance || !selectedDiagram}
                className={`mt-4 px-8 py-3 rounded-[20px] text-white font-semibold text-[18px] ${
                    selectedSubstance && selectedType
                        ? "bg-[#00BF63] cursor-pointer"
                        : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                View Diagram
            </button>
        </div>
    );
}
