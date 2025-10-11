
import './App.css';
import MainDec from './December/MainDec.';
import MainFooter from './footer/MainFooter';
import LastFooter from './last footer/LastFooter';
import MainLastfooter from './last footer/MainLastFooter';
import Main from './Nav/Main';
import MainNews from './newsProduct/MainNews';
import MainProduct from './product/MainProduct';
import MainVideoInfo from './productInfo/MainVideoInfo';
import MainPromo from './promo section/MainPromo';
import Mainslide from './Slide/MainSlide';
import MainTransport from './transport/MainTransport';
// import NavContainer from './Nav/NavContainer';

function App() {
  return (
    <div className="App ">
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
    </div>
  );
}

export default App;
