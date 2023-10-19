import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import ExtensiveCards from "../src/Practice-Components/Extensive-Cards/React/ExtensiveCards.jsx";
import ExtensiveCardsViews from "./components/views/Extensive-Cards/ExtensiveCardsViews.jsx";
import "./App.css";
import PropTypes from "prop-types";

const LayoutWithNavbarAndFooter = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

LayoutWithNavbarAndFooter.propTypes = {
  children: PropTypes.node,
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutWithNavbarAndFooter>
            <Home />
          </LayoutWithNavbarAndFooter>
        }
      />
      <Route
        path="/extensive-cards"
        element={
          <LayoutWithNavbarAndFooter>
            <ExtensiveCards />
          </LayoutWithNavbarAndFooter>
        }
      />
      <Route path="/extensive-cards-views" element={<ExtensiveCardsViews />} />
    </Routes>
  );
}

export default App;
