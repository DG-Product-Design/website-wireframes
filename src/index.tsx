import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import '@j33p1n/component-library/src/library-styles.css'
import './output.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<div id='App' className='overflow-auto'>
			<Nav  />
			<App/>
			<Footer />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
