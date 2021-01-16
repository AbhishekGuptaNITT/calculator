import React from 'react'
import classes from './Cell.module.css'

const Cell = (props) => {   
    return(
        <div className={classes.Cell}>
            <h3>Expression {props.id}</h3>
            <input 
                className={classes.ExpressionPart} 
                autoFocus onChange={(event) => props.calculator(event,props.id)}
                onClick={() => props.clicked(props.id)}
                >
            </input>
            <div className={classes.OutputPart}>{props.output}</div>
        </div>
    )
}

export default Cell;