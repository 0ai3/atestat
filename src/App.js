import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import MovieCarousel from "./Components/MovieCarousel";
import SeriesCarousel from "./Components/SeriesCarousel";
import MainPage from "./Components/mainPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<Nav />} />
       
    </Routes>
  </BrowserRouter>
  // <MainPage/>
  // <MovieCarousel/>
  // <SeriesCarousel/>
  // <div>
  //  <Login/>
  //  <Register/>
  // </div>

  )
}
export default App;
