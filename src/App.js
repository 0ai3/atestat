import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import MainPage from "./Components/mainPage";
import Profile from "./Components/Profile";
import Favourites from "./Components/Favourites";
import Video from "./Components/Video";
import About from "./Components/About";
import Trending from "./Components/Trending";
import { AuthProvider } from "./contexts/AuthContext";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import NotFound from "./Components/NotFound";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Nav />} >
            <Route index element={<MainPage />} /> 
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="/about" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="favorites" element={<Favourites />} />
            <Route path="trending" element={<Trending />} />
            <Route path=":id" element={<Video/>}/>
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
