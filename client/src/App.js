import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Branchform from './Pages/Branch_form'
import Commonlogin from './Pages/Common_login/Common_login.js'
import AdminLogin from './Pages/Admin_login/admin_login'
import AdminOptions from './Pages/Admin_options/admin_options'
import StaffAdd from './Pages/StaffAdd/StaffAdd'
import Add_Branch from './Pages/BranchAdd/Add_Branch'
import Staff_login from './Pages/Staff_Login/Staf_Login'
import Owner_Registeration from './Pages/Add_Owner/Add_Owner'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/branchform" element={<Branchform />}></Route>
      <Route path="/commonlogin" element={<Commonlogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminoptions" element={<AdminOptions />}></Route>
      <Route path="/addstaff" element={<StaffAdd />}></Route>
      <Route path="/addbranch" element={<Add_Branch />}></Route>
          <Route path="/stafflogin" element={<Staff_login/>}></Route>
          <Route path="/addowner" element={<Owner_Registeration/>}></Route>
      </Routes>
      </Router>
  );
}

export default App;
