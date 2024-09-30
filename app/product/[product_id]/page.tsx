
import { notFound } from 'next/navigation'
import React from 'react'

const Product_Id = ({params}:{params:{product_id:string}}) => {
    if(parseInt(params.product_id) > 10) {
        
      return notFound()
    }
  return (
    <div>
      <p>Our lists of product {params.product_id}</p>
    </div>
  )
}

export default Product_Id
