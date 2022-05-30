import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,BrowserRouter,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Error from './pages/Error';
import Home from './pages/Home';
import SinglePlace from './pages/SinglePlace';  
import  Tour from './pages/Tour'; 
import  Vtour from './pages/Vtour'; 
import Header from './components/Header';
import Agency from './pages/Agency';
import Restaurant from './pages/Restaurant';
import Hotel from './pages/Hotel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Places from './pages/Places';
import Blogs from './pages/Blogs';
 
 
function App() {
  return (
    <BrowserRouter>
    <div className="App page-wrapper">
      <>
        <Header/>
        <Routes>  
        <Route path="/vi" element={<Home />} />
        <Route path="/vi/places/" element={<Places />} />
        <Route path="/vi/places/:slug" element={<SinglePlace />} />
        <Route path="/vi/tours/" element={<Tour />} />
        <Route path="/vi/blogs/" element={<Blogs />} />
        <Route path="/vi/vtours/" element={<Vtour />} />
        <Route path="/vi/restaurants/" element={<Restaurant />} />
        <Route path="/vi/hotels/" element={<Hotel />} />
        <Route path="/vi/agencies/" element={<Agency />} />
        
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
         
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
