import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from './pages/About';
import Footer from './components/Footer'
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import VirtualTour from './pages/VirtualTour';
import Why from './pages/Why';
import OurStars from './pages/OurStars';
import FloatingBtn from './components/FloatingBtn';
import { ToastContainer } from "react-toastify"
import Hostel from './pages/Hostel';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/hostels" element={<Hostel />} />
          <Route path="/why" element={<Why />} />
          <Route path="/vrtour" element ={<VirtualTour />} />
          <Route path="/stars" element ={<OurStars />} />
        </Routes>
        <Footer />
        <FloatingBtn />
      </Router>
    </div>
  );
}

export default App;
