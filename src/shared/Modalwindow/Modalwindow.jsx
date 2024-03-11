import React from "react";
import styles from "./Modalwindow.module.scss";
import Modal from "react-modal";
import cancel from '../../shared/assets/icons/cancel (4).png'

Modal.setAppElement("#root");
const ModalWindow = ({ title, children, visible, setVisible, closeModal }) => {
  const customStyles = {
    overlay: {
      backdropFilter: "blur(4px)",
      background: 'rgba(0, 0, 0, 0.5)',
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "999",
    },
    content: {
      position: "static",
      padding:'0px',
      width: "clamp(50% , 700px , 90%)",
      height: "min(50% , 300px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "6px",
      border: '1px solid #d1d5db',
      background: '#fff',
    },
  };

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => setVisible(false)}
      style={customStyles}
    >
      <div className={styles.modal_head}>
        <h3 className={styles.modal_title}>{title}</h3>
        <button
          className={styles.modal_close}
          onClick={() => {
            setVisible(false);
          }}
        >
          <img src={cancel} alt="" className={styles.icon}/>
        </button>
      </div>
      <div className={styles.modal_body}>{children}</div>
    </Modal>
  );
};

export default ModalWindow;
