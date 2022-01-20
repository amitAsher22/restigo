import React , {useState} from 'react';
//// material ui
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
/// react-icon
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

/// css from style_Css 
import '../style_Css/cell.css'




function Cell(props) {
    const [counter , setCounter] = useState(0)

//// function increase and reduction
const increase = ()=>{
  setCounter(counter => counter + 1)
}

const reduction = ()=>{
  setCounter(counter => counter - 1)
}

const changeValueWithInput = (event)=>{
    setCounter(event.target.value)
}




  return (
    <TableRow key={props.row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="right">{props.row.catalog_number}</TableCell>
      <TableCell align="right">{props.row.name}</TableCell>
      <TableCell align="right">{props.row.price}</TableCell>
      <TableCell align="right">
        <AiOutlinePlusCircle onClick={increase} > + </AiOutlinePlusCircle>
        <input type="number" value={counter} onChange={(e)=> changeValueWithInput(e)} />
        <AiOutlineMinusCircle onClick={reduction}> - </AiOutlineMinusCircle>
      </TableCell>
    </TableRow>

  );
}

export default Cell;


  