import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import {Footer} from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
