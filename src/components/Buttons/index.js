import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
        <Link size="" color={props.color} style={{color: `${props.color}`}}>{props.value}</Link>
    )
}

export default Button;