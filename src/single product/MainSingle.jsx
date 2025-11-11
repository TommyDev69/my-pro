import React, { useState } from 'react'
import Apple from '../image/products/product-img-5.jpg'
import { faFacebookF, faTwitter,faGoogle,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SingleShop from './SingleShop'

export default function MainSingle() {
const[social, setSocial] =useState(
    [faFacebookF,faTwitter,faGoogle,faLinkedin]
)
// var shop = faCartShopping;
  return (
    <div>
      <SingleShop Photo={Apple} Media = {social} />
    </div>
  )
}
