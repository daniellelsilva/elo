import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="/about" element={ <About/> } />
      <Route exact path="/services" element={ <Service/> } />
    </Routes>
  );
}

export default App;
