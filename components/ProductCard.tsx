import React from 'react'
type Card = {
    id: string, 
    title: string,
    description: string, 
    serviceList: string[],
    href: string,
    image: string,
}

const card: Card[] = [
    {
        id:"1", 
        title: "",
        description: "", 
        serviceList: [],
        href: "",
        image: "",
    }
]

const ProductCard = () => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard