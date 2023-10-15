import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import ExtensiveCards from "../src/Practice-Components/Extensive-Cards/React/ExtensiveCards.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/extensive-cards" element={<ExtensiveCards />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
