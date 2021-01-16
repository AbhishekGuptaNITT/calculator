import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import Add from '../../Assets/Images/add.svg'
import Delete from '../../Assets/Images/delete.svg'
import Function from '../../Assets/Images/function.svg'
import classes from './BuildControls.module.css'
import Calculator from '../../Assets/Images/calculator.svg'
const BuildControls = (props) => {
    return(
        <React.Fragment>
        <h1 className={classes.Header}>
            <img src={Calculator} />
            Jupyter Calculator
        </h1>
        <div className={classes.BuildControls}>
            <BuildControl clicked={props.addcell}>
                <img src={Add} alt='Add Cell' />
            </BuildControl>
            <BuildControl clicked={props.removecell}>
                <img src={Delete} alt='Remove Cell' />
            </BuildControl>
            <BuildControl clicked={props.calculate}>
                <img src={Function} alt='Calculate Cell' />
            </BuildControl>
        </div>
        </React.Fragment>
    )
}
export default BuildControls;