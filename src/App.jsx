import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import { GlobalBorderbox, theme } from "./components/style";
import { useState } from "react";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [sideOpen, setSideOpen] = useState(false)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Normalize/>
        <GlobalBorderbox/>
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
        <Sidebar opened={sideOpen}>
          <Button p={`.5rem`} link to={`/why`} m={`1rem 0`}>Why ACY</Button>
          <Button p={`.5rem`} link to={`/products`} m={`1rem 0`}>Products</Button>
          <Button p={`.5rem`} link to={`/platforms`} m={`1rem 0`}>Platforms</Button>
          <Button p={`.5rem`} link to={`/education`} m={`1rem 0`}>Education</Button>
          <Button p={`.5rem`} link to={`/partners`} m={`1rem 0`}>Partners</Button>
        </Sidebar>
        <main style={{ paddingTop: '5rem' }}>
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
