import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from './pages/About';
import Toaster from './components/Toaster';
import Footer from './components/Footer'
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BranchPage from './pages/BranchPage';
import VirtualTour from './pages/VirtualTour';

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/branches" element={<BranchPage />} />
          <Route path="/vrtour" element ={<VirtualTour />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
