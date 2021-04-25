import './App.css';
import Header from './components/header';
import About from './components/about';
import {HashRouter as Router,Route }  from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
       <Route exact path ='/' component={About} />
    </div>
    </Router>
  );
}

export default App;
