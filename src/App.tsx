import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/about";
import Checkout from "./pages/checkout";


function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Головна сторінка (твій код) за адресою "/" */}
        <Route path="/" element={<Home />} />

        {/* <Route path="/safety" element={<Xiaomi />} /> */}

        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
