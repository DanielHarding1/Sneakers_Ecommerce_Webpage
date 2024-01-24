import "./App.css";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  });

  return (
    <Router>
      <div>
        {token ? <Navbar /> : null}
        {token ? <Header /> : null}
        <Wrapper>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            {token ? <Route path={"/homepage"} element={<Home />} /> : ""}
            <Route path="/" element={<SignUp />} />
          </Routes>
        </Wrapper>
        {token ? <Footer /> : null}
      </div>
    </Router>
  );
}
export default App;
