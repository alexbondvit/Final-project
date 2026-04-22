import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Look from './pages/Look';
import Xiaomi from './pages/Xiaomi';
import Checkout from './pages/checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buy" element={<Checkout />} />
        <Route path="/look" element={<Look />} />
        <Route path="/xiaomi" element={<Xiaomi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;