import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import MyMovies from "./components/MyMovies";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
// import MyAccount from "./components/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
        <Route
          path="/"
          element={
            <>
              <MyHero /> <MyMovies movie="Star Wars" /> <MyMovies movie="Harry Potter" /> <MyMovies movie="The lord of the rings" /> <MyFooter />{" "}
            </>
          }
        />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>

      {/* <MyAccount /> */}
    </BrowserRouter>
  );
}

export default App;
