import "./App.css";
import './Components/Css/dashboard.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/mdbreact/dist/css/mdb.css';
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap';

import {  Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Components/SideBar/Sidebar";
import Dashboard from "./Components/Main/Dashboard";
import {BrowserRouter} from 'react-router-dom'
import Landing from "./Landing";
function App() {
  return (
    <BrowserRouter>
    <Landing/>
    </BrowserRouter>
  );
}

export default App;
