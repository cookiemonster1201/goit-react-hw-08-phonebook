import { createPortal } from 'react-dom';
import { BackDrop, ModalDiv } from './styled';

export default function Modal({ children }) {
  return createPortal(
    <BackDrop>
      <ModalDiv>{children}</ModalDiv>
    </BackDrop>,
    document.getElementById('modal-root'),
  );
}
