import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import Image from 'next/image';
import logo from "../fonts/logo.png"

export const Header = () => {
  return (
    <div className="w-full h-[70px] bg-[#242428] flex justify-between items-center p-[10px]">
      <div className='flex items-center gap-4'>
        <FontAwesomeIcon icon={faBars}  color="white" height={20} width={20}/>
      <Image src={logo} alt="logo" width={121} height={40} />
      <input className='w-[360px] h-[40px] bg-white pl-6' placeholder='Search anime...' />
      </div>

      <button className="bg-[#FFDD95] w-[70px] h-[40px] text-[14px] font-semibold rounded-xl">
        login
      </button>
    </div>
  );
};
