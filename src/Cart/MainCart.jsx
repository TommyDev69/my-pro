import { useState } from 'react'
import Stawberry from '../image/products/product-img-1.jpg'
import Berry from '../image/products/product-img-2.jpg'
import Lemon from '../image/products/product-img-3.jpg'
// import faX  from '@fortawesome/free-solid-svg-icons'
// import { faXma } from '@fortawesome/free-solid-svg-icons/faX'
import Cart from './Cart'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// faXmark


const MainCart = () => {
    const [cart, setCart]= useState([
        {id:1, productImage: Stawberry, Name:"Stawberry", price:1000, icon:faXmark},
        {id:2, productImage: Berry, Name:"Berry", price:1500, icon:faXmark },
        {id:3, productImage: Lemon, Name:"Lemon", price:500, icon:faXmark }

    ])

    const DeleteButton= (id) =>{
        const updateCart=cart.filter((items) => items.id !== id)
         setCart(updateCart)
    }

    const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
    setCart(updatedCart)
}
    return ( 
        <>
         <Cart Heading={cart} Title="quality" Total="total" DeleteButton={DeleteButton} updateQuantity={updateQuantity} />
        </>
     );
}
 
export default MainCart;