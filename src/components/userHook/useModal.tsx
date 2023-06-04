import { useState } from 'react';

const useModal = () => {
  const [modalActive, setisOpen] = useState(false);
  const setActive = () => {
    setisOpen(!modalActive);
  };

  return {
    modalActive,
    setActive,
  };
};

export default useModal;
