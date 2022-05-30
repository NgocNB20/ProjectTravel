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
import './App.css';
import Header from './components/Header';
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
        <Route path="/vi/tours/" element={<Place />} />
        <Route path="/vi/blogs/" element={<Place />} />
        <Route path="/vi/vtours/" element={<Place />} />
        <Route path="/vi/restaurants/" element={<Place />} />
        <Route path="/vi/restaurants/" element={<Place />} />
        <Route path="/vi/restaurants/" element={<Place />} />
        
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
         
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
