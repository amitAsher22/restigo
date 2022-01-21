import React, { useState } from 'react';
//// redux
import { connect } from 'react-redux'

//// material ui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
/// react-icon
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

/// css from style_Css 
import '../style_Css/cell.css'


let array = []

function Cell(props) {
  
  const [counter, setCounter] = useState(0)
  const [itemsSummary , setItemsSummary] = useState(array)
  
  //// function increase and reduction and changeValue
  const increase = () => {
    setCounter(counter => counter + 1);
    // console.log(props.row);
    setItemsSummary( [...itemsSummary , props.row]) 
   array.push(props.row)
   console.log("itemSummary",itemsSummary);
  }
 
  

  
 
  const reduction = () => {
    setCounter(counter => counter - 1)
  }

  const changeValueWithInput = (event) => {
    setCounter(event.target.value)
  }




  return (
    <TableRow key={props.row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">{props.row.catalog_number}</TableCell>
      <TableCell align="right">{props.row.name}</TableCell>
      <TableCell align="right">{props.row.price}</TableCell>
      <TableCell align="right">
        <div className='groupOfAction'>
          <AiOutlinePlusCircle onClick={increase} > + </AiOutlinePlusCircle>
          <input type="number" value={counter} onChange={(e) => changeValueWithInput(e)} />
          <AiOutlineMinusCircle onClick={reduction}> - </AiOutlineMinusCircle>
        </div>
      </TableCell>
    </TableRow>

  );
}

const mapDispatchToProps = (dispatch) => {

  return {

  }
}



export default connect(null, mapDispatchToProps)(Cell);


