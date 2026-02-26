import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import App from './App';
import { AudioPlayerProvider } from './context/AudioContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  </React.StrictMode>
);
