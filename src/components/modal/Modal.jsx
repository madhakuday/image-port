import React from "react";
import Modal from "react-modal";
import cardData from "../../data/cardData";
import "./Modal.css";
const ModalComp = ({ children, open }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    console.log("Mo", children);
    setIsOpen(false);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        onClick={open}
      >
        <img src={cardData[0].fImg} alt="" width="100%" />
      </div>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={!open}
        style={{
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          zIndex: "10",
        }}
        contentLabel="Example Modal"
      >
        <img src={cardData[0].fImg} alt="" width="100%" />
      </Modal>
    </div>
  );
};

export default ModalComp;
