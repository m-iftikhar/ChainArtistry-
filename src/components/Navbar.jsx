import logo from '../assets/logo.png'
import logotext from '../assets/logotext.png'
const Navbar = () => {
  return (
    <div className="w-full h-[100px] top-[25px] left-[300px] flex items-center justify-between px-4 bg-white shadow-lg ">
      {/* Logo */}
      <div className="flex  flex-col items-center h-[100px] w-[99.73px] top-[25px] left-[300px]">
        <img src={logo} alt="Logo" className="" />
        <img src={logotext} alt="logotext" className=''/>
      </div>

      {/* Navigation */}
      <div className="flex items-center space-x-8 w[331px] h-[79px] top-[35px] left-[642px] gap-[35px] rounded-[6px] py-[15px] px-[25px]">
        <a href="#home" className="text-lg font-semibold text-gray-700 hover:text-gray-900">
          Home
        </a>
        <a href="#sources" className="text-lg font-semibold text-gray-700 hover:text-gray-900">
          AI NFT GENERATION
        </a>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 w-[404] h-[58px] top-[46px] left-[1216px] rounded-[8px] gap-[10px]">
        <button className="px-4 py-2 w-[213px] h-[58px] rounded-[8px] bg-gradient-to-r from-[#d65d5d] to-[rgba(253,0,0,1)] text-white p-2  text-[22px] font-medium">
        Connect Wallet
        </button>
        <button className="px-4 py-2  text-red-600 rounded bg-white w-[176px] h-[58px] border-red-600 border-[1.8px] text-[22px] font-medium">
        Create NFT
        </button>
      </div>
    </div>
  );
}

export default Navbar
