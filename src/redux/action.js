import { SETACTIVESUPPLIER ,SETACTIVEORDER } from './type'

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