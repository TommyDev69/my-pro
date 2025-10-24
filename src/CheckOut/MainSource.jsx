import {useState} from 'react'
import CheckContent from './CheckContent';
// import FormCheck from './FormCheck';
const MainSource = () => {
    const[togCheck, setTogCheck] =  useState(false)
    const[togShip, setTogShip] = useState(false)
    const[togCard, setTogCard] = useState(false)

    const onTogShipClick= () => setTogShip(prev => !prev)
    const onTogCardClick= () => setTogCard(card => !card)


    return ( 
        <>
          <CheckContent OpenTogCheck = {togCheck} onTogCheckClick={() => setTogCheck(!togCheck)}
             OpenTogShip= {togShip}  HandleShipClick = {onTogShipClick}
               OpenTogCard= {togCard}  HandleCardClick = {onTogCardClick}
            />

          
        </>
     );
}
 
export default MainSource;