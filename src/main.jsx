import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// Импортируем именно CartProvider по его имени
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Используем CartProvider как компонент-обертку */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);