import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import chemicals from "../../data/chemicals";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
    const [openSubstance, setOpenSubstance] = useState(false);
    const [selectedSubstance, setSelectedSubstance] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = () => {
        if (selectedSubstance) {
            navigate(`/engineers/${selectedSubstance.name}/pfd`);
        }
    };

    return (
        <div className="bg-[#EEFFF7] pt-[60px] pb-[80px] min-h-screen flex flex-col items-center justify-start">
            <p className="text-[#1AC2EA] text-[50px] font-semibold text-center pb-[60px]">
                <FontAwesomeIcon icon={faFlaskVial} className="pr-[16px]" /> Substance
            </p>

            <div className="relative mb-6">
                <button
                    onClick={() => setOpenSubstance(!openSubstance)}
                    className="border border-[#AAA5A5] cursor-pointer bg-white rounded-[50px] p-[20px] text-[20px] text-[#00BF63] font-semibold flex items-center justify-between gap-[12px] w-[250px]"
                    aria-haspopup="listbox"
                    aria-expanded={openSubstance}
                >
                    <p>{selectedSubstance?.name || "Select Substance"}</p>
                    <FontAwesomeIcon icon={openSubstance ? faAngleUp : faAngleDown} />
                </button>

                {openSubstance && (
                    <div
                        className="absolute mt-2 w-[250px] max-h-[300px] overflow-y-auto z-10 rounded-[20px] bg-white shadow-lg border border-[#AAA5A5]"
                        role="listbox"
                    >
                        <ul>
                            {chemicals.map((item) => (
                                <li
                                    key={item.name}
                                    onClick={() => {
                                        setSelectedSubstance(item);
                                        setOpenSubstance(false);
                                    }}
                                    role="option"
                                    aria-selected={selectedSubstance?.name === item.name}
                                    className={`px-4 py-[16px] cursor-pointer hover:bg-[#00BF63] hover:text-white ${
                                        selectedSubstance?.name === item.name ? "bg-[#00BF63] text-white" : ""
                                    }`}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <button
                onClick={handleNavigate}
                disabled={!selectedSubstance}
                className={`mt-8 px-8 py-3 rounded-[20px] text-white font-semibold text-[18px] transition ${
                    selectedSubstance
                        ? "bg-[#00BF63] hover:bg-[#00a555] cursor-pointer"
                        : "bg-gray-400 cursor-not-allowed"
                }`}
            >
                View Diagram
            </button>
        </div>
    );
}
