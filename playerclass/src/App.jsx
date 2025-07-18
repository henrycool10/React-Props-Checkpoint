import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import PlayerDetails from "./page/PlayerDetails";
import Players from "./page/Players";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/player/:id" element={<PlayerDetails/>}/>
            <Route path="/players" element={<Players/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
