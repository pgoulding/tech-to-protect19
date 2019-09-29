import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Components/Routes/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);