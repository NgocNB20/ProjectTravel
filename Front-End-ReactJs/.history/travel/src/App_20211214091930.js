import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,BrowserRouter,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Place from './pages/Place';
import Error from './pages/Error';
import Home from './pages/Home';
import SinglePlace from './pages/SinglePlace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App page-wrapper">
      <>
 
        <FontAwesomeIcon icon={faCoffee} />
         
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
