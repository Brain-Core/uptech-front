
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop/>
      </Router>
      
    </div>
  );
}

export default App;
