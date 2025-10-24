import {useState} from 'react'
import CheckContent from './CheckContent';
import FormCheck from './FormCheck';
const MainCheak= () => {

    const[togCheck, setTogCheck] =  useState(false)
    return ( 
        <div>
        <CheckContent OpenTogCheck = {togCheck} />
        {togCheck && <FormCheck /> }
        </div>
     );
}
 
export default MainCheak;