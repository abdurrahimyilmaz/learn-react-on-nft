import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import MintingPage from './pages/mint';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mint" component={MintingPage} exact />
      </Switch>    
    </Router>
  );
}

export default App;
