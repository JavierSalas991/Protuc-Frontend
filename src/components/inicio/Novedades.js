import React, { useState } from "react";
import imagenPrueba from "../../img/cursos/curso1.png";
import { iconos } from "../helpers/iconos";

const Novedades = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Cursos");

  let categorias = ["Cursos", "Convocatorias", "FAQs"];
  return (
    <>
      {/* dispositivos grandes */}
      <div
        className="d-none d-md-block pt-3 arial-rounded background-azul-oscuro"
        style={{ "font-size": "3vw" }}
      >
        <div className="d-flex justify-content-center">
          <p className="text-light">Novedades</p>
        </div>
        <div
          style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
          className="row py-4"
        >
          <div className="col-6 contenedor-novedades  d-flex flex-column justify-content-center align-items-center">
            <div className="cuadro-blanco">
              <div className="imagen-desplazada">
                <img src={imagenPrueba} className="w-100 h-100"></img>
              </div>
            </div>
            <div style={{ width: "85%", "font-size": "75%" }}>
              <div className="cartel-nuevo">
                <p className="texto-nuevo colorsito-amarillo">NUEVO</p>
              </div>
            </div>
          </div>

          <div className="col-6 contenedor-novedades d-flex justify-content-center align-items-center">
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

              <div>
                <p style={{ "font-size": "50%" }}>
                  {" "}
                  <strong
                    style={{
                      color: "#fff",
                      "font-size": "150%",
                    }}
                  >
                    Recursos Humanos{" "}
                  </strong>
                  <span className="colorsito-amarillo">
                    {iconos.estrella}
                    {iconos.estrella}
                    {iconos.estrella}
                  </span>
                </p>
                <p
                  className="aventa"
                  style={{
                    color: "#fff",
                    "font-size": "60%",
                  }}
                >
                  Capacitate para ingresar a la industria de software factory
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="boton-celeste-transparente px-4 pt-1 pb-1
              4
              J"
                  style={{ "font-size": "50%" }}
                >
                  Conoce mas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* dispositivos chicos */}
      <div
        className="d-block d-md-none arial-rounded background-azul-oscuro"
        style={{ "font-size": "5.5vw" }}
      >
        <div className="d-flex justify-content-center pt-3">
          <p className="text-light">Novedades</p>
        </div>
        <div
          style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
          className="row py-4"
        >
          <div className="col-12 contenedor-novedades  d-flex flex-column justify-content-center align-items-center">
            <div className="cuadro-blanco">
              <div className="imagen-desplazada">
                <img src={imagenPrueba} className="w-100 h-100"></img>
              </div>
            </div>
            <div style={{ width: "85%", "font-size": "75%" }}>
              <div className="cartel-nuevo">
                <p className="texto-nuevo colorsito-amarillo">NUEVO</p>
              </div>
            </div>
          </div>

          <div className="col-12 contenedor-novedades d-flex justify-content-center align-items-center">
            <div className="contenedor-novedades-derecho">
              <div className="d-flex justify-content-around px-2 pt-3">
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

              <div>
                <p style={{ "font-size": "50%" }}>
                  {" "}
                  <strong
                    style={{
                      color: "#fff",
                      "font-size": "150%",
                    }}
                  >
                    Recursos Humanos{" "}
                  </strong>
                  <span className="colorsito-amarillo">
                    {iconos.estrella}
                    {iconos.estrella}
                    {iconos.estrella}
                  </span>
                </p>
                <p
                  className="aventa"
                  style={{
                    color: "#fff",
                    "font-size": "60%",
                  }}
                >
                  Capacitate para ingresar a la industria de software factory
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="boton-celeste-transparente px-4 pt-1 pb-1
              4
              J"
                  style={{ "font-size": "50%" }}
                >
                  Conoce mas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Novedades;
