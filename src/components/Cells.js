import React, { useState } from 'react';
//// redux
import { connect } from 'react-redux'
import { draftOrder } from '../redux/action';

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
  const [itemsSummary , setItemsSummary] = useState([]);
  const [itemRow, setItemRow] = useState(props.row)/// {...data}


  //// function increase and reduction and changeValue

  const increase = () => {
    itemRow.amount = itemRow.amount ? itemRow.amount + 1 : 1;
    setCounter(itemRow.amount);
    setItemRow( {...itemRow} );
    itemsSummary[0] = itemRow
    setItemsSummary([...itemsSummary])
    console.log('itemsSummary', itemsSummary);
    props.draftOrder(itemsSummary) //// redux
  }


  const reduction = () => {
    itemRow.amount = itemRow.amount ? itemRow.amount - 1 : 1
    setCounter(itemRow.amount)
    setItemsSummary({...itemRow})
    itemsSummary[0]= itemRow
    setItemsSummary(itemsSummary)
    // console.log('itemsSummary', itemsSummary);
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


const mapStateToProps = (state)=>{
  // console.log(state.draftOrders);
  return{

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    draftOrder : (orderItem) => dispatch(draftOrder(orderItem))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Cell);