import React,{Component} from 'react';
import BuildControls from '../../Components/BuildControls/BuildControls';
import Cell from '../../Components/Cells/Cell/Cell'
import Cells from '../../Components/Cells/Cells'
class ArithematicCalculator extends Component{
    state = {
        currentCell:0,
        cells:[
            {expression:0,output:0},
        ],
    }
    
    expressionChangeHandler = (event,id) => {
        const expression = event.target.value;
        let output = this.state.cells[id].output
        try{
            output = eval(expression);
        }
        catch{

        }
        finally{
            let cells = this.state.cells;
            cells[id] = {expression:expression,output:output}
            this.setState({cells})
        }
    }
    addCellHandler = () => {
        let cells = this.state.cells;
        cells.push({expression:0,output:0})
        this.setState({cells:cells,currentCell:cells.length-1})
    }
    clickCellHandler = (id) => {
        console.log(id);
        this.setState({currentCell:id})
    }
    deleteCellHandler = () => {
        let cells=this.state.cells;
        if(cells.length>0)
        {
            cells.splice(this.state.currentCell,1)
            let currentCell = cells.length-1
            this.setState({
                cells:cells,
                currentCell:currentCell
            })
        }
        else
            alert('No cell to delete')
    }
    render(){
        return(
            <div>
                <BuildControls 
                    addcell={this.addCellHandler}
                    removecell={this.deleteCellHandler}
                />
                <Cells 
                    list={this.state.cells} 
                    calculator={this.expressionChangeHandler}
                    clicked={this.clickCellHandler}
                    />
            </div>
        )
    }
}

export default ArithematicCalculator;