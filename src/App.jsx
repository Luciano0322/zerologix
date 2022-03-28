import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { theme } from "./components/style";
import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Normalize/>
        <Navbar bgColor="white" variant={`left`} opened={sideOpen} sidebarOpen={setSideOpen}>
          <li>
            <Button p={`.5rem`} link to={`/why`}>Why ACY</Button>
          </li>
          <li>
            <Button p={`.5rem`} link to={`/products`}>Products</Button>
          </li>
          <li>
            <Button p={`.5rem`} link to={`/platforms`}>Platforms</Button>
          </li>
          <li>
            <Button p={`.5rem`} link to={`/education`}>Education</Button>
          </li>
          <li>
            <Button p={`.5rem`} link to={`/partners`}>Partners</Button>
          </li>
        </Navbar>
        <main style={{ paddingTop: '4.5rem' }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
