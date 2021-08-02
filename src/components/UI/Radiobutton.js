import { forwardRef, useRef } from 'react';
import classes from './Radiobutton.module.scss';

const Radiobutton = forwardRef((props, ref) => {
    const inputRef = useRef();

    const requiredSpan = <span>&nbsp;*&nbsp;</span>

    return (
        <div className={`${classes.wrapper} ${classes.className}`} ref={inputRef}>
            <label htmlFor={props.id}>{props.label}
                <span>{props.isRequired ? requiredSpan : null}</span>
            </label>
            {props.values.map(rb => <div className={classes.radio}>
                <input type="radio" name={props.name} value={rb.value} id={rb.id} checked={rb.checked}/>
                <label>{rb.label}</label>
            </div>)}
        </div>
    )
});

export default Radiobutton;