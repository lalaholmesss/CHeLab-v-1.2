import Home from "./pages/HomePg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Students from "./pages/StudentsPg";
import Engineers from "./components/Engineers";
import Comments from "./pages/CommentsPg";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Researchers from "./pages/ResearchersPg";
import DisplayDiagram from "./components/DisplayDiagram";
import { useLocation, Route, Routes } from "react-router-dom";

function App() {
    const location = useLocation();
    const noHeaderFooter = ["/login", "/signup"];
    const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student" element={<Students/>}></Route>
        <Route path="/engineers" element={<Engineers/>}></Route>
        <Route path="/comments" element={<Comments/>}></Route>
        <Route path="/researchers" element={<Researchers/>}></Route>
        <Route path="/engineers/:substance/:diagram" element={<DisplayDiagram />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
