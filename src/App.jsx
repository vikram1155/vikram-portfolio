import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";

function App() {
  return (
    <ThemeProviderWrapper>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/experience"
            element={
              <Layout>
                <Experience />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
