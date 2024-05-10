"use client";

import { useState } from "react";

export const AddButton = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        type="button"
        className="
      text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-3xl px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => setOpenModal(true)}
      >
        +
      </button>
    </>
  );
};
