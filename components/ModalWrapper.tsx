import React from 'react';
import Modal from 'react-modal';
import styles from '../styles/ModalWrapper.module.css';

Modal.setAppElement('#__next');

interface ModalWrapperProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;