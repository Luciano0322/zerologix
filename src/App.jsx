import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

const theme = {
  colors: {
    primary: "#01254F",
    secondary: "#43AA15",
    textSecondary: "#00000065",
    textPrimary: "#333333",
  }
}

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Normalize/>
        <Navbar>
          <Link to={`/`}>home</Link>
        </Navbar>
        <main style={{ paddingTop: '4.5rem' }}>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
