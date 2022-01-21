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





function Cell(props) {
  
  const [counter, setCounter] = useState(0)
  const [itemsSummary , setItemsSummary] = useState([])
  
  
  //// function increase and reduction and changeValue
  const increase = () => {
      Object.assign(props.row, {"amount": counter+1})
      setCounter(counter => counter + 1)
      // setItemsSummary( [...itemsSummary , props.row ])
      if(itemsSummary.length <= 0 || itemsSummary === []){
        setItemsSummary( [...itemsSummary , props.row ])
      }
      console.log(itemsSummary, "itemsSummary");
      
    
    }
 

  const reduction = () => {
    Object.assign(props.row, {"amount": counter-1});
    setCounter(counter => counter - 1)
    console.log("itemSummary",itemsSummary);
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
          <input className='inputAmount' type="number" value={counter} onChange={(e) => changeValueWithInput(e)} />
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


