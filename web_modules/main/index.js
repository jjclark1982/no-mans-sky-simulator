import 'file?name=index.html!./index.html';
import './style.css';

import React from 'react';
import {render} from 'react-dom';
import App from 'app';

try {
    render(React.createElement(App), document.getElementById('app'));
}
catch (error) {
    document.getElementById('app').innerHTML =
        '<div id="status-display" data-status="Error">'+error.stack;
}
