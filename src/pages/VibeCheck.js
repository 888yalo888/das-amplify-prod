// import React from 'react'
// import { Link } from 'react-router-dom'

// function VibeCheck() {
//   return (
//     <>
//     <h1>VibeCheck</h1>
//     <Link to="/">
//       <button>Go Back to Check In</button>
//     </Link>  
//     </>
//     )
// }
// export default VibeCheck

import React, { useState } from 'react';
import Modal from 'react-modal';

const VibeCheck = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};

export default VibeCheck;
