import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';

export default function Home () {
 
  
  return(
      <div className="max-w-[1720px] bg-[#EEFFF7] px-[40px] flex flex-col py-[32px]">
          <SearchBar />
          <div className="border-2 border-dashed border-[#00BF63] rounded-[50px] px-[40px] py-[32px] bg-white inline-block">   
              <div className="flex items-center mb-4 gap-[12px]">
                  <FontAwesomeIcon icon={faHeart} className="text-[#00BF63]"/>
                  <h2 className="text-[#00BF63] font-semibold text-lg">Favorites</h2>
              </div>
              <div className="space-y-2">
                  <button className="w-full border border-green-500 rounded-[50px] px-4 py-2 text-[#00BF63] text-left bg-[#EEFFF7] hover:bg-green-100">
                  Neylon-6,6
                  </button>
                  <button className="w-full border border-green-500 rounded-[50px] px-4 py-2 text-[#00BF63] text-left bg-[#EEFFF7] hover:bg-green-100">
                  PET
                  </button>
              </div>
          </div>
      </div>
  )
}