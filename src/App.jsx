import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing"
import Blog from "./pages/Blog";
import Proyectos from "./pages/Proyectos";
import Publicaciones from "./pages/Publicaciones";
import VirtyRemLab from "./proyectos/VirtyRemLab";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/proyectos" element={<Proyectos />}/>
          <Route path="/virtyremlab" element={<VirtyRemLab />} />
          
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/" element={<Landing/>} />
        </Routes>
      </div>
    </Router>
  );
}
