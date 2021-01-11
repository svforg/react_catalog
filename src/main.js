import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.module.scss'

ReactDom.render(<App/>, document.querySelector('#app'));
