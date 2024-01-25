import "./App.css";
import SignUp from "./pages/Login/SignUp";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import Main from "./pages/Main"
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
        <Wrapper>
          <Routes>
            {!token ? <Route path="/" element={<SignUp />} /> : null}
            {!token ? <Route path="/signup" element={<SignUp />} /> : null}
            {!token ? <Route path="/login" element={<Login setToken={setToken} />} /> : null}
            {token ? <Route path={"/homepage"} element={<Main />} /> : ""}
          </Routes>
        </Wrapper>
        {token ? <Footer /> : null}
      </div>
    </Router>
  );
}
export default App;
