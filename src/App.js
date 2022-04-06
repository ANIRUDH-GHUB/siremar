/*Pranavi Remidi     1001956946
  Krishna Chaithanya 1001957981
  Madhuri Mittapalli 1001856681*/
import logo from "./logo.svg";
import "./App.css";
import "./admin.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Adminpage from "./pages/Adminpage";
import Navbar2 from "./components/Navbar2";
import Barchart from "./components/Barchart";
import Inspectorpage from "./pages/Inspectorpage";
import Residentpage from "./pages/Residentpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { userRole } from "./constants/CommonConstants";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import ManageResidents from "./pages/ManageResidents";
import ManageInspectors from "./pages/ManageInspectors";
import ManageBusiness from "./pages/ManageBusiness";
import ManageSchools from "./pages/ManageSchools";

function App() {
  // let cachedRole = localStorage.getItem("user_role");
  // console.log(Object.values(userRole));
  // if (!Object.values(userRole).includes(cachedRole)) {
  //   cachedRole = "EMPTY";
  // }
  // console.log(cachedRole);

  return (
    <Router basename="/wdm">
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/adminpage"
          element={
            <ProtectedRoute userRole={[userRole.admin]}>
              <Adminpage />
            </ProtectedRoute>
          }
        />
        <Route path="/navbar2" element={<Navbar2 />} />
        <Route path="/barchart" element={<Barchart />} />
        <Route
          path="/inspectorpage"
          element={
            <ProtectedRoute userRole={[userRole.inspector]}>
              <Inspectorpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/residentpage"
          element={
            <ProtectedRoute userRole={[userRole.resident]}>
              <Residentpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:id"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <Post />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-residents"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <ManageResidents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-inspectors"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <ManageInspectors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-business"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <ManageBusiness />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage-schools"
          element={
            <ProtectedRoute userRole={Object.values(userRole)}>
              <ManageSchools />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
