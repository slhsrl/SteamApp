
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App /> 
  </Provider>
)
