import './App.css';
import MainDec from './December/MainDec.';
import MainFooter from './footer/MainFooter';
import MainLastfooter from './last footer/MainLastFooter';
import Main from './Nav/Main';
import MainNews from './newsProduct/MainNews';
import MainProduct from './product/MainProduct';
import MainVideoInfo from './productInfo/MainVideoInfo';
import MainPromo from './promo section/MainPromo';
import Mainslide from './Slide/MainSlide';
import MainTransport from './transport/MainTransport';
import Search from './search/Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './about/About';
import NavContainer from './Nav/NavContainer';
import AboutService from './why/AboutService';
import AboutTeam from './about_team/AboutTeam';
import MainCart from './Cart/MainCart';
// import CartBody from './Cart_Backgound/CartBody';
import CartContect from './Cart_Backgound/CartContect';
import MainContact from './contact/MainContact';
import ContactHead from './contact_Show/ContactHead';
import ErrorMessage from './404/ErrorMessage';
import ErrorBody from './404 body/ErrorBody';
import MainCheck from './CheckOut/MainCheak';
import MainCheak from './CheckOut/MainCheak';
import MainSource from './CheckOut/MainSource';
import CheckContent from './CheckOut/CheckContent';


function App() {
  return (
    // <div className="App">
    //   {/* <Main /> */}
    //   <About />
    // </div>
    <Router>
      <div className="App">

        {/* ✅ Move your navigation inside Router */}
       

        {/* ✅ All Routes must be inside Router */}
        <Routes>
          {/* Main route */}
          <Route path="/" element={
            <>
             <Main />
              <MainTransport />
              <MainProduct />
              <MainPromo />
              <Mainslide />
              <MainVideoInfo />
              <MainDec />
              <MainNews />
              <MainFooter />
              <MainLastfooter />
               
            </>
          } />
          <Route path="/Search" element={<Search />} />
          <Route path = "/About"  caseSensitive={false} element ={<>
           <NavContainer />
            <About />
            <AboutService />
            <MainDec />
            <AboutTeam />
            <Mainslide />
            <MainFooter />
            <MainLastfooter />

            </>} />

            <Route path='/Cart' caseSensitive={false} element = {<>
            <NavContainer />
            <CartContect />
            <MainCart />
            <Mainslide />
            <MainFooter />
            <MainLastfooter />
            </>} />


             <Route path='/Contact' caseSensitive={false} element = {<>
            <NavContainer />
             <ContactHead />
            <MainContact />
            <Mainslide />
            <MainFooter />
            <MainLastfooter />
            </>} />

            <Route path = "/404" caseSensitive = {false} element ={<>
            <NavContainer />
            <ErrorMessage />
            <ErrorBody />
             <Mainslide />
            <MainFooter />
            <MainLastfooter />
            </>}/>

            <Route path='/Checkout' caseSensitive={false} element ={<>
            <NavContainer />
            <ErrorMessage />

            <MainSource />
            {/* <CheckContent /> */}
            </>} />
            
        </Routes>
      </div>
        
    </Router>
  );
}

export default App;
