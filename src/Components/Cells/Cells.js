import React from 'react'
import classes from './Cells.module.css'
import Cell from './Cell/Cell'

const Cells = (props) => {
    return(
        props.list.map(
            (cell,ind) => {
                return(
                    <Cell 
                        output = {cell.output} 
                        calculator={props.calculator}  
                        key={ind} 
                        id={ind}
                        clicked={props.clicked}
                        />
                )
            }
        )
    );
}

export default Cells;