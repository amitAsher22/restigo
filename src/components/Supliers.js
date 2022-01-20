import React from "react"
//// redux
import { connect } from 'react-redux'

//// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//// css from file style_Css 
import '../style_Css/suppliers.css'
/// action from redux
import { setSuppliers } from '../redux/action'



const Suppliers = (props) => {
  
  const setActiveSupplier = (supplierIndex) => {
    props.setSuppliers(supplierIndex)
    // reset activeOrder({})
  }
 

  return (
    <div className="suppliersDiv" >
      {props.suppliers.map((supplier) =>
        <Card sx={{ maxWidth: 345 }} key={supplier.id} onClick={() => {setActiveSupplier(supplier)}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={supplier.logo}
              alt={supplier.name}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {supplier.name}
              </Typography>
            </CardContent>

          </CardActionArea>
        </Card>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    suppliers: state.suppliers
  }
}

export default connect(mapStateToProps, {
  setSuppliers
})(Suppliers)