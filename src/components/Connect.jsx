import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import connectlogo1 from '../assets/connectlogo1.png';
import connectlogo2 from '../assets/connectlogo2.png';
import connectlog3 from '../assets/connectlogo3.png';
import connectlogo4 from '../assets/connectlogo4.png';
import { getPeraWalletInstance } from '../utils/peraWallet';
import { connectToWalletConnect } from '../utils/walletConnect';

import { useState,useEffect } from 'react';

const Connect = ({ toggleModal }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const peraWallet = getPeraWalletInstance();
  // const [isModalOpen, setIsModalOpen] = useState(false);

 

  
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);
 
  const connectPeraWallet = async () => {
    try {
      const accounts = await peraWallet.connect();
      console.log('Connected accounts:', accounts);
      setSuccessMessage('Wallet connected successfully!');
      
    } catch (error) {
      console.error('Failed to connect to Pera Wallet:', error);
    }
  };
  const connectWalletConnect = async () => {
    try {
      const connector = await connectToWalletConnect();
      if (connector.connected) {
        setSuccessMessage('WalletConnect connected successfully!');
        
      }
    } catch (error) {
      console.error('Failed to connect to WalletConnect:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center mt-[270px] justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={toggleModal}
        >
          ✖
        </button>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-lg font-bold mb-2">CONNECT YOUR WALLET</h1>
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Fry Networks Logo" className="h-12" />
          </div>
          <h2 className="text-red-500 text-lg font-semibold">Fry Networks</h2>
        </div>

        {/* Wallet Options */}
        <div className="mt-6 space-y-3">
          {/* Pera Wallet Option */}
          <div className="relative cursor-pointer" >
            <img
              src={connectlogo1}
              alt="Pera Logo"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6"
              onClick={connectPeraWallet}
            />
            <input
              type="text"
              value="Pera"
              readOnly
              className="w-full border-2 border-red-500 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-gray-700"
            />
          </div>

          {/* Other Wallet Options */}
          <div className="relative">
            <img
              src={connectlogo2}
              alt="Defly Logo"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6"
              onClick={() => window.open("https://defly-connect-example.blockshake.name/", "_blank")}
            />
            <input
              type="text"
              value="Defly"
              readOnly
              className="w-full border-2 border-red-500 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-gray-700"
            />
          </div>

          <div className="relative">
            <img
              src={connectlog3}
              alt="Daffi Logo"
              onClick={() => window.open("https://web.daffiwallet.app/", "_blank")}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6"
            />
            <input
              type="text"
              value="Daffi"
              readOnly
              className="w-full border-2 border-red-500 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-gray-700"
            />
          </div>

          {/* WalletConnect Option */}
          <div className="relative cursor-pointer" >
            <img
              src={connectlogo4}
              alt="WalletConnect Logo"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6"
              onClick={connectWalletConnect}
            />
            <input
              type="text"
              value="WalletConnect"
              readOnly
              className="w-full border-2 border-red-500 rounded-lg py-2 pl-10 pr-4 focus:outline-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Connect.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Connect;
