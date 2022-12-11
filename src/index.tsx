import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice'
import timerReducer from './features/timerSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    timer: timerReducer,
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
