import { forwardRef, useRef, useState, useEffect } from 'react';
import classes from './Input.module.scss';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';


const Input = forwardRef((props, ref) => {

    const inputRef = useRef();
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dateInputErrorHandler = () => {

    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const requiredSpan = <span>&nbsp;*&nbsp;</span>

    const datepickerMUI =
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes["mui-datepicker"]}
                autoOk
                placeholder="DD/MM/YYY"
                variant="inline"
                allowKeyboardControl={true}
                disableFuture={true}
                format="dd/MM/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "end" }}
                onChange={date => handleDateChange(date)}
                InputProps={{
                    disableUnderline: true
                }}
                
            />
        </MuiPickersUtilsProvider>

    const isDateMUI = props.type === "date";

    return (
        <div className={`${classes.control} ${props.className}`}>
            <label htmlFor={props.id}>{props.label}<span>{props.isRequired ? requiredSpan : null}</span></label>
            {isDateMUI && datepickerMUI}
            {!isDateMUI && <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value} />}
        </div>
    )
});

export default Input;