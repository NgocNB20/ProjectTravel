import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error/>} />
        </Routes>
        <Test/>
         
      </>
    </div>
  );
}

export default App;
