import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Introduction from './components/Introduction';
import BestProduct from './components/BestProduct';
import ListProduct from './components/ListProduct';
import BrandStory from './components/BrandStory';
import HappendedIssue from './components/HappendedIssue';
import Video from './components/Video';
import Footer from './components/Footer';
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <HeroBanner />
      <Introduction />
      <BestProduct />
      <ListProduct />
      <BrandStory />
      <HappendedIssue />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
