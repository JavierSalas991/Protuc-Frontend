import React, { useState, useEffect } from "react";
import "./App.css";
import 'animate.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Inicio from "./components/inicio/Inicio";
import 'antd/dist/antd.css';
import Curso from "./components/curso/Curso";
import Axios from "axios";
import { urlServidor } from "./components/helpers/urlHelper";


function App() {

  const [infoGeneral, setInfoGeneral] = useState(null);

  const getHome = async () => {
    const res = await Axios.get(`${urlServidor}/protucapi/home/`);
    console.log(res)
    return res;
  };

  useEffect(async () => {
    let res = await getHome();
    setInfoGeneral(res.data);
  }, []);

  return (

    <Router basename="/">
      <Routes>
      <Route>
        {infoGeneral ?
          <>
            <Route path="/" element={ <Navigate to="/inicio"/>}/>
            <Route path="/inicio" element={<Inicio infoGeneral={infoGeneral} />} />
            <Route path="/curso/:id" element={<Curso infoGeneral={infoGeneral} />} />
          </>
          : null}
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
