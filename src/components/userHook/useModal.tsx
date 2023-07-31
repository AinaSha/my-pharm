import { useState } from 'react';

const useModal = () => {
  const [modalActive, setisOpen] = useState(false);
  const setActive = () => {
    setisOpen(!modalActive);
    // console.log('modalActive', modalActive);
  };

  // console.log('useModal');
  return {
    modalActive,
    setActive,
  };
};

export default useModal;
