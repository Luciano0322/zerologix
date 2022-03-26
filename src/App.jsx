import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";

const theme = {
  colors: {
    primary: "#01254F",
    primaryLight: "#01254F65",
    secondary: "#43AA15",
    textPrimary: "#333333",
    textSecondary: "#00000065",
  }
}

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Normalize/>
        <Navbar>
          <Link to={`/`}>logo</Link>
          <Link to={`/`}>login</Link>
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
