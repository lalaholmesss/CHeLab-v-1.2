import Home from "./pages/HomePg";
import Footer from "./components/Footer";
import Students from "./pages/StudentsPg";
import Engineers from "./components/Engineers";
import Comments from "./pages/CommentsPg";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Researchers from "./pages/ResearchersPg";
import DisplayDiagram from "./components/DisplayDiagram";
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost";
import AdminNavbar from "./components/AdminDashboard/AdminNavbar";
import Requests from "./components/AdminDashboard/Requests";
import { useLocation, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function App() {
    const location = useLocation();
    const noHeaderFooter = ["/login", "/signup", "/admin/req"];
    const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/student" element={<Students/>}></Route>
        <Route path="/engineers" element={<Engineers/>}></Route>
        <Route path="/discussion" element={<Comments/>}></Route>
        <Route path="/researchers" element={<Researchers/>}></Route>
        <Route path="/engineers/:substance/:diagram" element={<DisplayDiagram />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/discussion/create" element={<CreatePost />}></Route>
        <Route path="/admin/navbar" element={<AdminNavbar/>}></Route>
        <Route path="/admin/req" element={<AdminDashboard/>}></Route>

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
