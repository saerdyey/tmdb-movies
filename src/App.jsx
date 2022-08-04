import "./App.css";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={ <MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Movies />
    </>
  );
};

export default App;
