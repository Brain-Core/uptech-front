
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop/>
        <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
