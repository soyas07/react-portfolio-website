import './css/App.css';

import { SliderData } from './data/SliderData'
import { AbilitiesData } from './data/AbilitiesData';
import { TestinomialData } from './data/TestinomialData'

import Intro from './components/Intro';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Abilities from './components/Abilities';
import Testinomial from './components/Testinomial';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {

  // carousel responsive breakpoint
  const breakPoint = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 1000, itemsToShow: 3},
  ]   

  return (
    <div className="container">
      <Intro />
      <Header />
      <About />
      <Portfolio data={SliderData} breakPoint={breakPoint} />
      <Abilities data={AbilitiesData} breakPoint={breakPoint} />
      <Testinomial data={TestinomialData} breakPoint={breakPoint} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
