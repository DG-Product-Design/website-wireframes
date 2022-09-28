import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import Homepage from './pages/Homepage';
import MortgagePage from './pages/MortgagePage';
import RealtyPage from './pages/RealtyPage';

const App = () => {

	React.useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return (
		<Suspense fallback={'Loading...'}>
			<BrowserRouter basename='/'>
				<Routes>
					<Route path="/" element={<Homepage  />} />
					<Route path="*" element={<Navigate replace to="/"  />} />
					<Route path="/mortgage" element={<MortgagePage  />} />
					<Route path="/realty" element={<RealtyPage  />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
  );
}

export default App;
