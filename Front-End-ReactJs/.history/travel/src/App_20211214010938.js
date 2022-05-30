import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Routes>
        <Route path="/(home)" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
         
      </>
    </div>
  );
}

export default App;
