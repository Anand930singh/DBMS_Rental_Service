import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Commonlogin from './Pages/Common_login/Common_login.js'
import AdminLogin from './Pages/Admin_login/admin_login'
import AdminOptions from './Pages/Admin_options/admin_options'
import StaffAdd from './Pages/StaffAdd/StaffAdd'
import AddBranch from './Pages/BranchAdd/Add_Branch'
import Home from './Pages/Home/Home'
import Add_Client from './Pages/Add_Client/Add_Client'
import Add_owner from './Pages/Add_Owner/Add_Owner'
import Staff_login from './Pages/Staff_Login/Staf_Login'
import Add_Property from './Pages/Add_Property/Add_Property'
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
      <Route path="/clientadd" element={<Add_Client />}></Route>
      <Route path="/owneradd" element={<Add_owner />}></Route>
      <Route path="/stafflogin" element={<Staff_login />}></Route>
      <Route path="/propertyadd" element={<Add_Property />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
