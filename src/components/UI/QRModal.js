import classes from './QRModal.module.scss';
import { useRef, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';

const APPLICATION_URL = "http://192.168.31.169:3000/patient";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

const ModalOverlay = (props) => {
    const qrRef = useRef();
    const { entryId, patientId } = props;
    useEffect(() => {
        const QRCode = window.QRCode;
        if (qrRef.current != null) {
            new QRCode(qrRef.current, `${APPLICATION_URL}/${patientId}/entries/${entryId}/quick-access`);
        }
    }, [entryId, patientId]);

    return (<div className={classes.modal} ref={qrRef}></div>);
}

const QRModal = (props) => {
    return <Fragment>
        <Backdrop onConfirm={props.onBackdropClick} />
        <ModalOverlay patientId={props.patientId} entryId={props.latestEntryId}/>
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