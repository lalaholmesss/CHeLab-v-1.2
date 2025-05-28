import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faFlaskVial, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import chemicals from "../../data/chemicals";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
    const [openSubstance, setOpenSubstance] = useState(false);
    const [openDiagram, setOpenDiagram] = useState(false);
    const [selectedSubstance, setSelectedSubstance] = useState(null);
    const [selectedDiagram, setSelectedDiagram] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = () => {
        if (selectedDiagram && selectedSubstance) {
            const diagramPath = selectedDiagram.toLowerCase().replace(/\s+/g, '-');
            navigate(`/engineers/${selectedSubstance.name}/${diagramPath}`);
        }
    };

    return (
        <div className="bg-[#EEFFF7] pt-[60px] pb-[80px]">
        <div className="flex flex-col items-center justify-center">
        <div className="flex gap-[200px] mb-6">
        <div className="relative">
            <p className="text-[#1AC2EA] text-[50px] font-semibold text-center pb-[60px]"><FontAwesomeIcon icon={faFlaskVial} className="pr-[16px]"/> Substance</p>
            <button
                onClick={() => setOpenSubstance(!openSubstance)}
                className="border border-[#AAA5A5] cursor-pointer bg-white rounded-[50px] p-[20px] text-[20px] text-[#00BF63] font-semibold flex items-center justify-between gap-[12px] w-[250px]"
            >
                <p>{selectedSubstance?.name || "Select Substance"}</p>
                <FontAwesomeIcon icon={openSubstance ? faAngleUp : faAngleDown} />
            </button>

            {openSubstance && (
                <div className="absolute mt-2 w-[250px] max-h-[300px] overflow-y-auto z-10 rounded-[20px] bg-white shadow-lg border border-[#AAA5A5]">
                    <ul>
                        {chemicals.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setSelectedSubstance(item);
                                    setOpenSubstance(false);
                                }}
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

        <div className="relative">
            <p className="text-[#1AC2EA] text-[50px] font-semibold text-center pb-[60px]"> <FontAwesomeIcon icon={faChartSimple} className="pr-[16px]"/>Diagram</p>

            <button
                onClick={() => setOpenDiagram(!openDiagram)}
                className="border border-[#AAA5A5] cursor-pointer bg-white rounded-[50px] p-[20px] text-[20px] text-[#00BF63] font-semibold flex items-center justify-between gap-[12px] w-[250px]"
            >
                <p>{selectedDiagram || "Select Diagram"}</p>
                <FontAwesomeIcon icon={openDiagram ? faAngleUp : faAngleDown} />
            </button>

            {openDiagram && (
                <div className="absolute mt-2 w-[250px] max-h-[300px] overflow-y-auto z-10 rounded-[20px] bg-white shadow-lg border border-[#AAA5A5]">
                    <ul>
                        {["Production Process", "PFD"].map((type, idx) => (
                            <li
                                key={idx}
                                onClick={() => {
                                    setSelectedDiagram(type);
                                    setOpenDiagram(false);
                                }}
                                className={`px-4 py-[16px] cursor-pointer hover:bg-[#00BF63] hover:text-white ${
                                    selectedDiagram === type ? "bg-[#00BF63] text-white" : ""
                                }`}
                            >
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>

    <button
        onClick={handleNavigate}
        disabled={!selectedSubstance || !selectedDiagram}
        className={`mt-[280px] px-8 py-3 rounded-[20px] text-white font-semibold text-[18px] transition ${
            selectedSubstance && selectedDiagram
                ? "bg-[#00BF63] hover:bg-[#00a555] cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
        }`}
    >
        View Diagram
    </button>
</div>
</div>
    );
}
