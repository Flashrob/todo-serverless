"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Modal } from "./Modal";

export const AddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const inputElement = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (showModal) {
      inputElement.current.focus();
    }
  }, [showModal]);

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        reference={inputElement}
      />
      <button
        type="button"
        className="
      text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-3xl px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => {
          setShowModal(true);
        }}
      >
        +
      </button>
    </>
  );
};
