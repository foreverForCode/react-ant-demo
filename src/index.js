import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Admin from './admin';

import Router from './pages/route_demo/router/router';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Admin />,
    document.getElementById('root')
);
// ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();