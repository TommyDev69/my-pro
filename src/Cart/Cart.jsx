    import React from 'react'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aggregate from './Aggregate'
    // import { tr } from 'framer-motion/client'

    export default function Cart({Heading, Title, Total, DeleteButton,updateQuantity}) {
    return (
        <div className='py-16 flex flex-col md:flex md:flex-row md:flex-gdrow-0 gap-8 landscape:w-full w-full'>
       <div className='md:w-7/12  mx-auto w-full md:mx-0 '>
         <table border={2} className="bordder-t border-red-600 bg-slawte-950 text-white md:w-10/12   mx-auto md:mx-20 w-[90%]  " celwlPadding={5} cellSpacwing={4}>
            <thead>
                <tr className="border text-center bg-[#efefef]  text-black  md:text-[18px] text-[14px] h-16" >
                    <th></th>     
                    <td>Product Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>{Title}</td>
                    <td>{Total}</td>

                </tr>
            </thead>
            <tbody>

                {Heading.map(cart =>(
                
                    <tr className="border" key={cart.id}>
                        <td  className=' flex justify-center  py-10 border-gray-50w0 pr-2'>
                        <div className="border  flex justify-center hover:bg-red-700 text-white rounded-xl">
                            <FontAwesomeIcon onClick={() => DeleteButton(cart.id)} icon={cart.icon} className='text-red-600 py-1  hover:bg-red-700 hover:text-white'/>
                        </div>
                        </td>
                        <td className="border" >
                           <div className="flex justify-center">
                             <img src={cart.productImage} alt={cart.Name} className=' w-20 ' />
                           </div>
                        </td>
                        <td className="border text-black">
                            <div className="flex justify-around text-[14px] md:text-[16px] px-4">
                                {cart.Name}
                            </div>
                         </td>
                        <td className='border text-black'>
                            <div className="flex justify-around md:text-[16px] px-4">  
                                {cart.price}
                            </div>
                        </td>
                        <td className=" border " >
                               
                            <div className=" flex justify-center">

                                <input type='number' className="md:w-24 w-16 mdx-20 border py-3 md:text-[16px] text-center text-[14px] text-[#9c9b9b] border-gray-300 placeholder:md:text-left placeholder:text-center placeholder:text-red-700"  min="1" defaultValue="0"
                                value={cart.quantity}
                                onChange={(e) => updateQuantity(cart.id, Number(e.target.value))}
                                />
                            </div>
                             
                        </td>
                        <td className='border text-black'>
                              <div className="flex justify-around text-[16px]">  
                                {/* {cart.price} */}
                                <td>₦{cart.price * cart.quantity || 0}</td>

                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        
        </table>
       </div>

        <Aggregate />
        </div>
    )
    }
