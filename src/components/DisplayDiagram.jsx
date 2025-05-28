import { useParams } from 'react-router-dom';
import chemicals from "../data/chemicals";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function DislayDiagram() {
    const { substance, diagram } = useParams();
    const currentChemical = chemicals.find(c => c.name === substance);
    const substancePfd = currentChemical?.pfdName;
    const videoLink = currentChemical?.youtubeLink;

    const getDiagramContent = () => {
    if (diagram === "pfd") {
      return (
        <div className="flex flex-col items-center mt-10 pb-[80px]">
          <h1 className="text-[40px] font-semibold mt-[40px] mb-[80px] text-[#1AC2EA] text-center">{`PFD of ${substance}`}</h1>

          <img
            src={`/pfds/${substancePfd}-pfd.png`}
            alt={`${substance} PFD`}
            className="w-full max-w-4xl border rounded-lg shadow-lg"
          />
        </div>
      );
    }

    if (diagram === "production-process") {
      return (
           <div>
                <h1 className="text-[40px] font-semibold mt-[40px] mb-[80px] text-[#1AC2EA] text-center">{`Production Process of ${substance}`}</h1>

                <div className="bg-white rounded-[50px] shadow-md p-6 mx-[90px]">
                    <div className="flex mb-4 justify-center gap-[600px] align-center">
                        <FontAwesomeIcon icon={faFlask} className="text-[#1AC2EA] text-[50px]" />
                        <FontAwesomeIcon icon={faPlay} className="text-[#1AC2EA] text-[50px]" />
                    </div>

                <div className="grid grid-cols-2 divide-x divide-[#AAA5A5] border-t border-b border-[#AAA5A5]">
                    <div className="text-xl font-semibold flex items-center justify-center border-r border-[#AAA5A5] p-4">
                    <p className="text-[36px]">{substance}</p>
                    </div>

                    <div className="flex flex-col w-full items-center justify-center p-4 py-[48px]">
                    <img
                        src={`/pfds/${substancePfd}-pfd.png`}
                        alt={`${substance} PFD`}
                        className="w-1/2 h-auto mb-2"
                    />
                    <a
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-black hover:underline"
                    >
                        {videoLink}
                    </a>
                    </div>
  </div>
</div>
            </div>
        )
    }
  };

  return (
    <div className="min-h-screen bg-[#EEFFF7] p-6">
      {getDiagramContent()}
    </div>
  );
}
