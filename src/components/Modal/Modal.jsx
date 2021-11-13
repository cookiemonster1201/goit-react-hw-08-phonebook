import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { BackDrop, ModalDiv } from './Modal-styled';

export default function Modal({ children, onClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
    // eslint-disable-next-line
  }, []);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClick();
    }
  };
  const handleEsc = ({ code }) => {
    if (code !== 'Escape') {
      return;
    }
    onClick();
  };

  return createPortal(
    <BackDrop onClick={handleBackdropClick}>
      <ModalDiv>{children}</ModalDiv>
    </BackDrop>,
    document.getElementById('modal-root'),
  );
}
