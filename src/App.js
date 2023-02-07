import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import ExpensesTracker from "./components/Works/ExpensesTracker";
import LawFirmApp from "./components/Works/LawFirmApp";
import RaintreeBooks from "./components/Works/RaintreeBooks";
import WeatherApp from "./components/Works/WeatherApp";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Works from "./pages/Works";

const LazyVoxelDog = lazy(() => import("./components/VoxelDog"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <LazyVoxelDog />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/works/law_firm" element={<LawFirmApp />} />
        <Route path="/works/raintree_book_shop" element={<RaintreeBooks />} />
        <Route
          path="/works/expenses_tracker_app"
          element={<ExpensesTracker />}
        />
        <Route path="/works/weather_app" element={<WeatherApp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
