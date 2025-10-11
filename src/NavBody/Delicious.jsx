import React from 'react'
import ActionButton from './ActionButton'

export default function Delicious({Content}) {
  return (
    <>
      <h1 className="capitalize text-[28px] md:text-[64px] font-bold text-white font-worksans ">{Content}</h1>
      <ActionButton />
    </>
  )
}
