import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Modal from 'components/Modal/Modal';
import modalOpenTransition from 'components/Modal/transitions.module.css';
import { ServiceName, Ul, Li, ModalButton } from './styled';
import { SERVICE_LIST } from 'constants/constants';

export default function AboutInfo() {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Ul>
        {SERVICE_LIST.map(service => {
          return (
            <Li key={service}>
              <ServiceName onClick={toggleModal}>{service}</ServiceName>
            </Li>
          );
        })}
      </Ul>
      <CSSTransition
        in={modalOpen}
        timeout={200}
        classNames={modalOpenTransition}
        unmountOnExit
      >
        <Modal onClick={toggleModal}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam autem
          qui eius, maxime debitis architecto repellendus expedita animi iusto
          pariatur ab facere porro accusantium est esse ex sequi in rem! Eos
          aliquam voluptate esse, eum incidunt facilis, iure est, quaerat ex
          quibusdam aperiam nisi! Repellendus autem dignissimos sequi non, nihil
          accusantium in. Harum, vero. Assumenda sapiente enim non, dolore ullam
          iure error voluptates numquam quos recusandae facilis quod omnis nobis
          consequuntur aperiam, eveniet quae, ipsa cupiditate magnam molestias!
          Modi ad, repellendus voluptatum aut fugiat impedit officia unde culpa
          explicabo ipsa fuga molestias ducimus aliquam, qui asperiores quia
          nostrum! Deserunt at magni odio saepe totam veniam soluta, ullam natus
          voluptates ex repellendus nam nobis iure? Deleniti perspiciatis ad
          dignissimos porro mollitia minus molestias? Illum excepturi nesciunt
          maxime consectetur molestiae unde maiores dicta facere nam libero
          obcaecati dolorem saepe id, rem sunt eos itaque quae mollitia possimus
          quidem? Praesentium nulla nihil sed!
          <ModalButton text={'Close'} onClick={toggleModal} />
        </Modal>
      </CSSTransition>
    </>
  );
}
