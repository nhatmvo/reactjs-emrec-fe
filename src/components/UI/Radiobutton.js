import { forwardRef, Fragment, useImperativeHandle, useState } from 'react';
import classes from './Radiobutton.module.scss';

const Radiobutton = forwardRef((props, ref) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    }

    const getValue = () => {
        return selectedOption;
    }

    useImperativeHandle(ref, () => {
        return {
            getValue: getValue
        };
    });

    const requiredSpan = <span>&nbsp;*&nbsp;</span>

    return (
        <div className={`${classes.wrapper} ${classes.className}`}>
            <label htmlFor={props.id}>{props.label}
                <span>{props.isRequired ? requiredSpan : null}</span>
            </label>
            <div className={classes.radio}>
                {props.options.map(rb => <Fragment>
                    <input type="radio" name={props.name} value={rb.value} id={rb.id}
                        onChange={handleRadioChange}
                        checked={rb.value === selectedOption} />
                    <label htmlFor={rb.id}>{rb.label}</label>
                </Fragment>
                )}
            </div>
        </div>
    )
});

export default Radiobutton;