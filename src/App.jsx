import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Wrapper from "./Wrapper/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
