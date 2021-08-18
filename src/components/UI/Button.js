import React from 'react';
import classes from './Button.module.scss';

const predefinedStyles = [
    "btn--green--solid",
    "btn--white--solid",
];


const Button = (props) => {
    const checkButtonStyle = predefinedStyles.includes(props.buttonStyle) ? props.buttonStyle : predefinedStyles[0];

    return (<button className={`${classes.btn} ${classes[checkButtonStyle]} ${props.className}`} onClick={props.onClick} type={props.type}>
        {props.children}
    </button>)
};

export default Button;
