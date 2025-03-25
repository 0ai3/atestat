import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import MovieCarousel from "./Components/MovieCarousel";
import SeriesCarousel from "./Components/SeriesCarousel";
import MainPage from "./Components/mainPage";
import Profile from "./Components/Profile";
import Thumbnail from "./Components/thumbnail";
import Video from "./Components/Video";

function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/Login" element={<Login />} />
  //     <Route path="/Register" element={<Register />} />
  //     <Route path="/" element={<Nav />} >
  //       <Route index element={<MainPage />} /> 
  //       <Route index element={<Thumbnail />} />
  //       <Route path="/Profile" element={<Profile/>} />
  //     </Route>

     
  //   </Routes>
  // </BrowserRouter>
  // <MainPage/>
  // <MovieCarousel/>
  // <SeriesCarousel/>
  // <div>
  //  <Login/>
  //  <Register/>
  // </div>
  <Video/>

  )
}
export default App;
