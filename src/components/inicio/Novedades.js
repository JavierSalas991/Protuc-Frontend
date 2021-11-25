import React, { useState } from "react";
import imagenPrueba from "../../img/cursos/curso1.png";
import { iconos } from "../helpers/iconos";

const Novedades = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Cursos");

  let categorias = ["Cursos", "Convocatorias", "FAQs"];
  return (
    <div id="background-azul-oscuro" className="pt-3 pb-2">
      <div
        className="d-flex justify-content-center"
        style={{ "font-size": "41px" }}
      >
        <p className="text-light">Novedades</p>
      </div>
      <div
        style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
        className="row py-4"
      >
        <div className="col-sm-12 col-md-6 contenedor-novedades  d-flex flex-column justify-content-center align-items-center">
          <div className="cuadro-blanco">
            <div className="imagen-desplazada">
              <img src={imagenPrueba} className="w-100 h-100"></img>
            </div>
          </div>
          <div style={{ width: "85%" }}>
            <div className="cartel-nuevo">
              <p className="texto-nuevo colorsito-amarillo">NUEVO</p>
            </div>
          </div>
        </div>

        {/* ///////////////////////// */}
        <div className="col-sm-12 col-md-6 contenedor-novedades d-flex justify-content-center align-items-center">
          <div className="contenedor-novedades-derecho">
            <div className="d-flex justify-content-around px-4">
              {categorias.map((categoria, key) => {
                if (categoriaSeleccionada === categoria) {
                  return (
                    <>
                      {key > 0 ? <div className="lineaCeleste"></div> : null}
                      <p className="categoria colorsito-celeste cursor-pointer">
                        {categoria
                          .replace("_", " ")
                          .replace("_", " ")
                          .replace(/\w\S*/g, (w) =>
                            w.replace(/^\w/, (c) => c.toUpperCase())
                          )}
                      </p>
                    </>
                  );
                } else {
                  return (
                    <>
                      {key > 0 ? <div className="lineaCeleste"></div> : null}
                      <p
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        className="categoria cursor-pointer"
                      >
                        {categoria
                          .replace("_", " ")
                          .replace("_", " ")
                          .replace(/\w\S*/g, (w) =>
                            w.replace(/^\w/, (c) => c.toUpperCase())
                          )}
                      </p>
                    </>
                  );
                }
              })}
            </div>
            <div classname="d-flex">
              <p className="titulo-seccion-novedades">Recursos humanos</p>
              <p className='colorsito-amarillo'>{iconos.estrella}{iconos.estrella}{iconos.estrella}</p>
              <p className='colorsito-amarillo'>{iconos.estrella}{iconos.estrella}{iconos.estrella}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novedades;
