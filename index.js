import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import GlobalState from './GlobalState';

ReactDom.render(<GlobalState><App/></GlobalState>,document.getElementById("root"))