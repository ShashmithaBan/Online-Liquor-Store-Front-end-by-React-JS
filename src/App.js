import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import {Footer} from './Components/Footer';
import { About } from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/about' element = {<About />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
