import Home from './pages/Home';
import Exercises from './pages/Exercises.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/exercises" element={<Exercises/>}/>
        {/* <Route index element={<Home />} /> */}
      </Routes>
    </BrowserRouter>

  );
}


export default App;

