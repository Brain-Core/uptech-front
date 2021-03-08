
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home/home.component';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop/>
        <Home/>
      </Router>
      
    </div>
  );
}

export default App;
