import "./App.scss";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/movie/Movies";
import Info from "./pages/info/Info";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";

function App() {
  const bar = useRef(null);

  return (
    <div className="App">
      <LoadingBar color="#f11946" ref={bar} />
      <Routes>
        <Route path="/" element={<Home bar={bar} />} />
        <Route path="/:type" element={<Movies bar={bar} />} />
        <Route path="/:type/:id/info" element={<Info bar={bar} />} />
      </Routes>
    </div>
  );
}

export default App;
