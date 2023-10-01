import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
