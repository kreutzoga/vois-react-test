import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage.jsx";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
