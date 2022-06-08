import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/Inicio";
import 'antd/dist/antd.css';
import Curso from "./components/curso/Curso";
import Axios from "axios";
import { urlServidor } from "./components/helpers/urlHelper";


function App() {

  const [infoGeneral, setInfoGeneral] = useState(null);

  const getHome = async () => {
    const res = await Axios.get(`${urlServidor}/protucapi/home/`);
    return res;
  };

  useEffect(async () => {
    let res = await getHome();
    setInfoGeneral(res.data);
  }, []);

  return (
    <Router basename="/protuc">
      <Routes>
        {infoGeneral ?
          <>
            <Route exact path="/inicio" element={<Inicio infoGeneral={infoGeneral} />} />
            <Route exact path="/curso" element={<Curso infoGeneral={infoGeneral} />} />
          </>
          : null}
      </Routes>
    </Router>
  );
}

export default App;
