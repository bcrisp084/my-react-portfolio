import './App.css';
import Header from './components/header/header';
import About from './directory/about';
import Portfolio from './directory/portfolio';
import {HashRouter as Router,Route }  from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
       <Route exact path ='/' component={About} />
       <Route exact path = '/portfolio' component={Portfolio} />
    </div>
    </Router>
  );
}

export default App;
