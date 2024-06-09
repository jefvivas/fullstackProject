import ClientSignUp from "./Pages/ClientSignUp";
import ClientList from "./Pages/ClientList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ClientSignUp />} />
        <Route path="/clients" element={<ClientList />} />
      </Routes>
    </Router>
  );
}

export default App;
