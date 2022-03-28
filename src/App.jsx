import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { theme } from "./components/style";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Normalize/>
        <Navbar bgColor="white" variant={`left`}>
          
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
