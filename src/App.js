import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Navbar from './Components/Navigation/Navbar';
import About from './Components/About';
import Coaches from './Components/Coaches';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={About} />
				<Route exact path='/coaches' component={Coaches} />
				<Route exact path='/contact-us' component={Contact} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
