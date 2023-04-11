import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Branchform from './Pages/Branch_form'
import Commonlogin from './Pages/Common_login/Common_login.js'
import AdminLogin from './Pages/Admin_login/admin_login'
import AdminOptions from './Pages/Admin_options/admin_options'
import StaffAdd from './Pages/StaffAdd/StaffAdd'
import Add_Branch from './Pages/BranchAdd/Add_Branch'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/branchform" element={<Branchform />}></Route>
      <Route path="/commonlogin" element={<Commonlogin />}></Route>
      <Route path="/adminlogin" element={<AdminLogin />}></Route>
      <Route path="/adminoptions" element={<AdminOptions />}></Route>
      <Route path="/staffadd" element={<StaffAdd />}></Route>
      <Route path="/branchadd" element={<Add_Branch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
