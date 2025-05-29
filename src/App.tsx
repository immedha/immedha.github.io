import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar, { ThemeProvider } from "./components/Navbar"
import FloatingElements from "./components/FloatingElements"
import Me from "./pages/Me"
import Building from "./pages/Building"
import UW from "./pages/UW"
import Favorites from "./pages/Favorites"
import Connect from "./pages/Connect"
import NotFound from "./pages/NotFound"
// import About from "./pages/About"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <FloatingElements />
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Me />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/projects" element={<Building />} />
              <Route path="/education" element={<UW />} />
              <Route path="/resources" element={<Favorites />} />
              <Route path="/contact" element={<Connect />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
