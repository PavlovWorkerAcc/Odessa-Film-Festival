import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Promo from "./components/Promo/Promo";
import About from "./components/About/About"
import Slider from './components/Slider/Slider';
import Parthners from './components/Parthners/Parthners';
import News from './components/News/News';

import './style/style.scss';



const App = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Promo/>
        <About/>
        <Slider/>
        <Parthners/>
        <News/>
    </div>
  );
}

export default App;
