import './App.css';
import Header from './components/header/header';
import About from './directory/about';
import Portfolio from './directory/portfolio';
import Contact from './directory/contact';
import {HashRouter as Router,Route, Switch }  from 'react-router-dom';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
       <Route exact path ={['/', "/About"]} component={About} />
       <Route exact path = '/portfolio' component={Portfolio} />
       <Route exact path = '/contact' component={Contact} />
       </Switch>
       <Footer />

    </div>
    </Router>
  );
}

export default App;
