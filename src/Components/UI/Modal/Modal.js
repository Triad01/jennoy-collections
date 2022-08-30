import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={style.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
