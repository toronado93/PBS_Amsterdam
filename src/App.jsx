import Layout from "./pages/Layout/Layout";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import References from "./pages/References";
import Contact from "./pages/Contact";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="services" element={<Services></Services>}></Route>
        <Route path="references" element={<References></References>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
