import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import {Footer} from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreditFooter } from './Components/CreditFooter';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
      <CreditFooter />
    </div>
  );
}

export default App;
