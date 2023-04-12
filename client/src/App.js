import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Commonlogin from './Pages/Common_login/Common_login.js'
import AdminLogin from './Pages/Admin_login/admin_login'
import AdminOptions from './Pages/Admin_options/admin_options'
import StaffAdd from './Pages/StaffAdd/StaffAdd'
import AddBranch from './Pages/BranchAdd/Add_Branch'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/commonlogin" element={<Commonlogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminoptions" element={<AdminOptions />}></Route>
      <Route path="/staffadd" element={<StaffAdd />}></Route>
      <Route path="/branchadd" element={<AddBranch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
