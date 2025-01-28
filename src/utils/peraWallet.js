import { PeraWalletConnect } from '@perawallet/connect';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef
  global.WebSocket = window.WebSocket; // Use the browser's native WebSocket
}

let peraWalletInstance = null;

export const getPeraWalletInstance = () => {
  if (!peraWalletInstance) {
    peraWalletInstance = new PeraWalletConnect();
  }
  return peraWalletInstance;
};