import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";
import Home from "./components/Home/Home";

function App() {
  return (
   /* Setting up the routing for the application using React Router. */
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;