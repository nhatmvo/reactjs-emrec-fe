import classes from './Textarea.module.scss';
import { useRef } from 'react';

const Textarea = (props) => {

    const inputRef = useRef();
    const requiredSpan = <span>&nbsp;*&nbsp;</span>

    return (
        <div className={`${classes.control} ${props.className}`}>
            <label htmlFor={props.id}>{props.label}<span>{props.isRequired ? requiredSpan : null}</span></label>
            { !props.readonly && <textarea ref={inputRef} id={props.id} onChange={props.onChangeValue}/> }
            { props.readonly && <p className={classes.readonly} id={props.id}>{props.value}</p> }
        </div>
    );
};

export default Textarea;