import './App.css';
import Login from './COMPONENT/LOGIN/Login';
import Register from './COMPONENT/REGISTER/Register';
import Home from './COMPONENT/PAGES/HOME/Home';
import Profile from './COMPONENT/PAGES/PROFILE/Profile'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
