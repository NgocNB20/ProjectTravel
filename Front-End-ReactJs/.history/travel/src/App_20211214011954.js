import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Place from './pages/Place';
import Error from './pages/Error';
import Home from './pages/Home';
import SinglePlace from './pages/SinglePlace';
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/places/" element={<Place />} />
        <Route path="/places/:slug" element={<SinglePlace />} />
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
         
      </>
    </div>
  );
}

export default App;
