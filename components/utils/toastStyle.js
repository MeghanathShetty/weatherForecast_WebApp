/*
import { BsFillCloudSlashFill  } from 'react-icons/bs';

export const toastErrorStyle = () => {
  return {
    position: 'top-center',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: '#ff4d4f',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: <BsFillCloudSlashFill />,
  };
};
*/

import { BsFillCloudSlashFill } from 'react-icons/bs';

export const toastErrorStyle = () => {
  return {
    position: 'top-center',
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '18px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      borderRadius: '20px',
      boxShadow: '0px 10px 20px rgba(255, 75, 43, 0.4)',
    },
    icon: <BsFillCloudSlashFill style={{ fontSize: '24px', marginRight: '10px', color: '#f7f7f7' }} />,
  };
};
