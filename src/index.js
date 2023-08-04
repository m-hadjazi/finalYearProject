import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/main.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </QueryClientProvider>
);