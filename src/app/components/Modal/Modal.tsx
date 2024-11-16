// import css from './Modal.module.scss';
// import ReactModal from 'react-modal';
// import Image from 'next/image';

// export interface ModalProps {
//   children?: React.ReactNode;
//   show: boolean;
//   onClose: () => void;
// }

// const Modal = ({ children, show, onClose }: ModalProps) => {
//   return (
//     <ReactModal
//       isOpen={show}
//       overlayClassName={css.overlay}
//       className={css.modal}
//       shouldCloseOnOverlayClick={true}
//       onRequestClose={() => onClose()}
//       ariaHideApp={false}
//       onAfterOpen={() => (document.body.style.overflow = 'hidden')}
//       onAfterClose={() => (document.body.style.overflow = 'unset')}
//     >
//       <div className={css.modalContent}>
//         <button className={css.closeButton} onClick={() => onClose()}>
//           <Image
//             className={css.icon}
//             width={48}
//             height={48}
//             src="/icons/x-mark.svg"
//             alt="upload"
//           />
//         </button>
//         {children}
//       </div>
//     </ReactModal>
//   );
// };

// export default Modal;
