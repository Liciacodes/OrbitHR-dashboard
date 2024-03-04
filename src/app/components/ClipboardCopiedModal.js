import React from "react";

const ClipboardCopiedModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-black opacity-70 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-8 shadow-md">
        <p className="text-lg text-center">Clipboard copied successfully!</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-20"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ClipboardCopiedModal;
