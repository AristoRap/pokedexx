import { Search } from "./components/search/Search";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
// import { Scene } from "./components/scene/Scene";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Router>
        {/* <Scene /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}
