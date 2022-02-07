import Header from './components/Header'
import Slider from './components/Slider'
import Choose from './components/Choose'
import Part1 from './components/Part1'
import Part2 from './components/Part2'
import Part3 from './components/Part3'
import Part4 from './components/Part4' 
import Slider2 from './components/Slider2'
import Follow from './components/Follow' 
import Footer from './components/Footer' 

import './style/index.css';
import './style/App.css';
import './style/slider.css';
import './style/choose.css';
import './style/part1.css';
import './style/part2.css';
import './style/part3.css';
import './style/slider2.css';
import './style/footer.css';

export default function App() {
  return (
 <main>
  <Header />
  <Slider />
  <Choose />
  <Part1 />
  <Part2 />
  <Part3 />
  <Part4 />
  <Slider2 />
  <Follow />
  <Footer />
  </main>
  );
}


