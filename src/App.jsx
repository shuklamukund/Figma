
import './App.css'
import Heading from './components/Navbar/Navbar';
import MainSection from './components/mainSection/mainSection';
import CardComponent from './components/cardComponent/cardCompont';
import OwnItem from './components/ownItem/ownItem';
import Testimonial from './components/Testimonial/Testimonial';
import Content from './components/footer/content/content';
import Link from './components/footer/links/link';
import Footer from './components/footer/footer';

function App() {
  
  return (
    <>
     <Heading/>
     <MainSection/>
     <CardComponent/>
     <OwnItem/>
     <Testimonial/>
     <Content/>
     <Link/>
     <Footer/>
    </>
  )
}

export default App
