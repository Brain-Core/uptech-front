
import './App.css';
import HeaderTop from './components/header/header_top/headertop.component';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/home.component';
import Product from './components/product/product.component';
import Impact from './components/impacts/impact.component';
import Footer from './components/footer/footer.component';
import Team from './components/team/team.component';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderTop/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/impact" component={Impact}/>
        <Route exact path="/team" component={Team}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
