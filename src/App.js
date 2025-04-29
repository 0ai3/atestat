import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import MovieCarousel from "./Components/MovieCarousel";
import SeriesCarousel from "./Components/SeriesCarousel";
import MainPage from "./Components/mainPage";
import Profile from "./Components/Profile";
import Favourites from "./Components/Favourites";
import Video from "./Components/Video";
import About from "./Components/About";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/" element={<Nav />} >
        <Route index element={<MainPage />} /> 
        {/* <Route index element={<Thumbnail />} /> */}
      <Route path="/about" element={<About />} />

        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="movies" element={<MovieCarousel/>}/>
        <Route path="series" element={<SeriesCarousel/>}/>
        <Route path="favorites" element={<Favourites />} />
        <Route path="/:id" element={<Video/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  // <MainPage/>
  // <MovieCarousel/>
  // <SeriesCarousel/>
  // <div>
  //  <Login/>
  //  <Register/>
  // </div>
  // <Video/>

  )
}
export default App;
