import classes from './QRModal.module.scss';
import { useRef, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';

const APPLICATION_URL = "http://localhost:80/api/v1/patients";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = (props) => {
    const qrRef = useRef();

    useEffect(() => {
        const QRCode = window.QRCode;
        if (qrRef.current != null) {
            new QRCode(qrRef.current, `${APPLICATION_URL}?id=${props.patientId}`);
        }
    }, []);

    return (<div className={classes.modal} ref={qrRef}></div>);
}

const QRModal = (props) => {
    return <Fragment>
        <Backdrop onConfirm={props.onBackdropClick}/>
        <ModalOverlay patientId={props.patientId}/>
        {/* {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onBackdropClick}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay patientId={props.patientId}/>,
            document.getElementById('overlay-root')
        )} */}
    </Fragment>

};

export default QRModal;