import React, { useState, useEffect } from "react";
//// redux
import { connect } from 'react-redux'
//// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


/// components
import Cell from "./Cells";
import OrderSummary from "./OrderSummary";



const alreadyBuiltData = {};

const ShowItems = (props) => {
  //// hooks
  const [itemsShow, setItemsShow] = useState([]);



  useEffect(() => {
    const activeSupplierId = props.activeSupplier.id;

    // If data is already built return it
    if (alreadyBuiltData[activeSupplierId]) {
      setItemsShow(alreadyBuiltData[activeSupplierId])
    }
    else {
      const filteredArray = props.items.filter((item) => item.supplier_id === activeSupplierId);
      setItemsShow(filteredArray);
      alreadyBuiltData[activeSupplierId] = filteredArray
    }
  }, [props.activeSupplier]);

  return (
    <div >
      <TableContainer sx={{ display:'flex'  }} >
        <Table sx={{ maxWidth: 700, margin: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">מספר קטלוגי</TableCell>
              <TableCell align="right">שם המוצר</TableCell> 
              <TableCell align="right">מחיר</TableCell>
              <TableCell align="right">כמות</TableCell>

            </TableRow>
          </TableHead>
          <TableBody> 
            {itemsShow.map((row) => (
              <Cell key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        <OrderSummary/>
      </TableContainer>
    </div>
  )

}



///// connect redux

const mapStateToProps = (state) => {
  return {
    items: state.items,
    activeSupplier: state.activeSupplier
  }
}


export default connect(mapStateToProps, null)(ShowItems)