import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,BrowserRouter,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Place from './pages/Place';
import Error from './pages/Error';
import Home from './pages/Home';
import SinglePlace from './pages/SinglePlace';  
import  Tour from './pages/Tour'; 
import Blog from './pages/Blogs'; 
import Header from './components/Header';
import Vtour from './pages/Agency';
import Restaurant from './pages/Restaurant';
 
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
    <div className="App page-wrapper">
      <>
        <Header/>
        <Routes>  
        <Route path="/vi" element={<Home />} />
        <Route path="/vi/places/" element={<Place />} />
        <Route path="/vi/places/:slug" element={<SinglePlace />} />
        <Route path="/vi/tours/" element={<Tour />} />
        <Route path="/vi/blogs/" element={<Blog />} />
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
