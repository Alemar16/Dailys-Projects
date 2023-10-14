import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
