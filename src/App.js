import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import LawFirmApp from "./components/Works/LawFirmApp";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
