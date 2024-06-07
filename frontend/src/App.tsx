import UserSignUp from "./Pages/ClientSignUp";
import UserList from "./Pages/ClientList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserSignUp />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
