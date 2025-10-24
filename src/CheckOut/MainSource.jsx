import {useState} from 'react'
import CheckContent from './CheckContent';
import FormCheck from './FormCheck';
const MainSource = () => {
    const[togCheck, setTogCheck] =  useState(false)
    return ( 
        <>
          <CheckContent OpenTogCheck = {togCheck} />
          {togCheck && <FormCheck />}
        </>
     );
}
 
export default MainSource;