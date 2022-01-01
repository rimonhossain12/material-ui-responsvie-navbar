import './App.css';
import Navigation from './Pages/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Review from './Pages/Home/Review/Review';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
