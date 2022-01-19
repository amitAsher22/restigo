import React , {useState} from "react"
import {connect} from 'react-redux'

const Suppliers = (props) =>{
  const [suppliers , setSuppliers] = useState(props.suppliersAll)
  console.log("suppliers hooks", suppliers , );
    return(
        <h1>suppliers</h1>
    )
  
} 

const mapStateToProps = (state)=>{
  
  return{
   suppliersAll : state.suppliers
  }
}




export default connect(mapStateToProps,null)(Suppliers)