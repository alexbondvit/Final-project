import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/about";
//import Xiaomi from "./pages/settings";
import Checkout from "./pages/checkout";


function Reviews() {
  return (
    <div>
      <h1>Отзывы и FAQ</h1>
    </div>
  );
}

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Головна сторінка (твій код) за адресою "/" */}
        <Route path="/" element={<Home />} />

        <Route path="/reviews" element={<Reviews />} />

        {/* <Route path="/safety" element={<Xiaomi />} /> */}

        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
