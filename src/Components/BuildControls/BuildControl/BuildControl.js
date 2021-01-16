import React from 'react';
import classes from './BuildControl.module.css';
import BuildControls from '../BuildControls';

const BuildControl = (props) => {
    return(
        <button className={classes.BuildControlBackdrop} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default BuildControl;