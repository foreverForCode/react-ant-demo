import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Admin from './admin';

import Router from './router';

// import Router from './pages/route_demo/router/router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router />,
    document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();