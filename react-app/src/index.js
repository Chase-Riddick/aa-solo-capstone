import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { AuthModalProvider } from './context/AthModal';
import LanguageContextProvider from './context/LanguageContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <LanguageContextProvider >
      <AuthModalProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
      </AuthModalProvider>
      </LanguageContextProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
