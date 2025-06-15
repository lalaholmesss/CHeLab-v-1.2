import { useParams } from 'react-router-dom';
import chemicals from "../data/chemicals";

export default function DisplayDiagram() {
  const { substance } = useParams();
  const currentChemical = chemicals.find(c => c.name === substance);

  if (!currentChemical) {
    return (
      <div className="min-h-screen bg-[#EEFFF7] p-6 flex justify-center items-center">
        <p className="text-red-600 text-xl">Chemical not found.</p>
      </div>
    );
  }

  const { pfdName, youtubeLink } = currentChemical;

  return (
    <div className="min-h-screen bg-[#EEFFF7] p-6">
      <div className="flex flex-col items-center mt-10 pb-[80px]">
        <h1 className="text-[40px] font-semibold mt-[40px] mb-[80px] text-[#1AC2EA] text-center">{`PFD of ${substance}`}</h1>

        <img
          src={`/pfds/${pfdName}-pfd.png`}
          alt={`${substance} PFD`}
          className="w-full max-w-4xl border rounded-lg shadow-lg"
        />

        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[24px] text-black hover:underline mt-4"
        >
          Watch video explanation
        </a>
      </div>
    </div>
  );
}
