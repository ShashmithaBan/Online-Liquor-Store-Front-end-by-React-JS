import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
