import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { AuthModalProvider } from './context/AthModal';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthModalProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
      </AuthModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
