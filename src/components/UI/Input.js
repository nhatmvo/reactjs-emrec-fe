import { forwardRef, useState, useImperativeHandle, useRef, useEffect } from 'react';
import classes from './Input.module.scss';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";


const Input = forwardRef((props, ref) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#30A16A'
            },
        },
    });

    const inputRef = useRef();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getDateValue = () => {
        return selectedDate;
    }

    const getInputValue = () => {
        return inputRef.current.value;
    }

    useImperativeHandle(ref, () => {
        return {
            getDateValue: getDateValue,
            getInputValue: getInputValue
        };
    });



    const requiredSpan = <span>&nbsp;*&nbsp;</span>

    const datepickerMUI =
        <ThemeProvider theme={theme}>
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
                    invalidDateMessage=""
                    maxDateMessage=""
                    minDateMessage=""
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>


    const isDateMUI = props.type === "date";

    return (
        <div className={`${classes.control} ${props.className}`}>
            <label htmlFor={props.id}>{props.label}<span>{props.isRequired ? requiredSpan : null}</span></label>
            {isDateMUI && datepickerMUI}
            {!isDateMUI && !props.readonly && <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                onChange={props.onChangeValue}/>}
            {!isDateMUI && props.readonly && <p>{props.value}</p>}
        </div>
    )
});

export default Input;