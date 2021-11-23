import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/Inicio";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';


function App() {
  return (
    <Router basename="/protuc">
      <Routes>
      <Route exact path="/inicio" element={<Inicio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
