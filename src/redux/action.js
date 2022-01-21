import { SETACTIVESUPPLIER ,SETACTIVEORDER ,DRAPTORDERS } from './type'

export const setSuppliers = (supplier) => {
  return {
    type: SETACTIVESUPPLIER,
    payload: supplier
  }
}

export const setActiveOrder = (data) => {
  return {
    type: SETACTIVEORDER,
    payload: data
  }
}

export const draftOrder = (order)=>{
  return{
    type:DRAPTORDERS,
    payload:order
  }
}