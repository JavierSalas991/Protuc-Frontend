import React from "react";
import logo from "../../img/logos/Protuc_Identidad01.png";
import logoLight from "../../img/logos/ProTuc_Identidad_Logotipov2.2_png.png";
import { Form, Button } from "react-bootstrap";
import { iconos } from "../helpers/iconos";

const Footer = ({ color }) => {
  return (
    <>
      {/* dispositivos grandes */}

      {color === 'dark' ?
        <>
          <div
            className="w-auto background-azul-oscuro d-none d-md-block"
            style={{ "font-size": "2vw" }}
          >
            <div className=" w-100 row arial-rounded" id="seccion-footer">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={logo} className="h-auto" style={{ width: "40%" }}></img>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div>
                  <p style={{ "font-size": "80%" }} className="colorsito-celeste">
                    Links Útiles
                  </p>
                  <div className="text-light ms-4" style={{ "font-size": "60%" }}>
                    <p className="my-1 mx-0">Beneficios</p>
                    <p className="my-1 mx-0">FAQs</p>
                    <p className="my-1 mx-0">Trabaja con nosotros</p>
                    <p className="my-1 mx-0">Contacto</p>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div>
                  <p style={{ "font-size": "80%" }} className="colorsito-celeste">
                    Comunidad
                  </p>
                  <div className="text-light ms-4" style={{ "font-size": "60%" }}>
                    <p className="my-1 mx-0">Quienes somos</p>
                    <p className="my-1 mx-0">Cursos</p>
                    <p className="my-1 mx-0">Novedades</p>
                    <p className="my-1 mx-0">Asesores</p>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="w-75">
                  <p style={{ "font-size": "80%" }} className="colorsito-celeste">
                    Sumate al newsletter
                  </p>
                  <div className="">

                    <form className="w-100 ">
                      <label
                        className="w-100 mb-2">
                        <input
                          type="email"
                          placeholder="mail@ejemplo.com"
                          className="w-100 h-100 my-2 ps-2 colorgris0"
                          style={{
                            border: "grey 1px solid",
                            "background-color": "#fff",
                            "border-radius": "4px",
                            "font-size": "50%",
                            padding: '0.75vw 0'
                          }}
                        />
                      </label>
                      <button
                        className="boton-celeste-cuadrado px-4 pt-1 pb-1 w-100"
                        style={{ "white-space": "nowrap", "font-size": "75%" }}
                      >
                        Suscribirme
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 row arial-rounded "
              style={{ "font-size": "100%" }}
            >
              <div className="col-4 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "80%" }} className="text-light">
                  Terminos y condiciones
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "60%" }} className="text-light">
                  <span className="colorsito-celeste">Derechos reservados a</span>{" "}
                  Visión Global
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center text-light">
                <p>
                  <span className="mx-2">{iconos.facebook}</span>
                  <span className="mx-2">{iconos.instagram}</span>
                  <span className="mx-2">{iconos.linkedin}</span>
                  <span className="mx-2">{iconos.youtube}</span>
                </p>
              </div>
            </div>
          </div>

          {/* dispositivos chicos */}
          <div
            className="w-auto background-azul-oscuro d-block d-md-none py-3"
            style={{ "font-size": "3.5vw" }}
          >
            <div className=" w-100 row arial-rounded" id="seccion-footer">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <img src={logo} className="h-auto" style={{ width: "40%" }}></img>
              </div>

              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="w-75">
                  <p style={{ "font-size": "80%" }} className="colorsito-celeste">
                    Sumate al newsletter
                  </p>
                  <div className="">
                  <form className="w-100 ">
                      <label
                        className="w-100 mb-1">
                        <input
                          type="email"
                          placeholder="mail@ejemplo.com"
                          className="w-100 h-100 my-2 ps-2 colorgris0"
                          style={{
                            border: "grey 1px solid",
                            "background-color": "#fff",
                            "border-radius": "4px",
                            "font-size": "50%",
                            padding: '1.7vw 0 '
                          }}
                        />
                      </label>
                      <button
                        className="boton-celeste-cuadrado px-4 pt-1 pb-1 w-100"
                        style={{ "white-space": "nowrap", "font-size": "75%" }}
                      >
                        Suscribirme
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 row arial-rounded pt-3"
              style={{ "font-size": "100%" }}
            >
              <div className="col-6 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "80%" }} className="text-light">
                  Terminos y condiciones
                </p>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "60%" }} className="text-light">
                  <span className="colorsito-celeste">Derechos reservados a</span>{" "}
                  Visión Global
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center text-light">
                <p>
                  <span className="mx-1">{iconos.facebook}</span>
                  <span className="mx-1">{iconos.instagram}</span>
                  <span className="mx-1">{iconos.linkedin}</span>
                  <span className="mx-1">{iconos.youtube}</span>
                </p>
              </div>
            </div>
          </div>
        </>


        :
        // version LIGHT
        <>
          <div
            className="w-auto background-gris d-none d-md-block"
            style={{ "font-size": "2vw" }}
          >
            <div className=" w-100 row arial-rounded" id="seccion-footer">
              <div className="col-3 d-flex justify-content-center align-items-center">
                <img src={logoLight} className="h-auto" style={{ width: "40%" }}></img>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div>
                  <p style={{ "font-size": "80%" }} className="colorgris-1">
                    Links Útiles
                  </p>
                  <div className="colorgris0 ms-4" style={{ "font-size": "60%" }}>
                    <p className="my-1 mx-0">Beneficios</p>
                    <p className="my-1 mx-0">FAQs</p>
                    <p className="my-1 mx-0">Trabaja con nosotros</p>
                    <p className="my-1 mx-0">Contacto</p>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div>
                  <p style={{ "font-size": "80%" }} className="colorgris-1">
                    Comunidad
                  </p>
                  <div className="colorgris0 ms-4" style={{ "font-size": "60%" }}>
                    <p className="my-1 mx-0">Quienes somos</p>
                    <p className="my-1 mx-0">Cursos</p>
                    <p className="my-1 mx-0">Novedades</p>
                    <p className="my-1 mx-0">Asesores</p>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="w-75">
                  <p style={{ "font-size": "80%" }} className="colorgris-1">
                    Sumate al newsletter
                  </p>
                  <div className="">

                    <form className="w-100 ">
                      <label
                        className="w-100  mb-2">
                        <input
                          type="email"
                          placeholder="mail@ejemplo.com"
                          className="w-100 h-100 my-2 ps-2 colorgris0"
                          style={{
                            border: "grey 1px solid",
                            "background-color": "#fff",
                            "border-radius": "4px",
                            "font-size": "50%",
                            padding: '0.75vw 0'
                          }}
                        />
                      </label>
                      <button
                        className="boton-gris-cuadrado px-4 pt-1 pb-1 w-100"
                        style={{ "white-space": "nowrap", "font-size": "75%" }}
                      >
                        Suscribirme
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 row arial-rounded "
              style={{ "font-size": "100%" }}
            >
              <div className="col-4 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "80%" }} className="colorgris0">
                  Terminos y condiciones
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "60%" }} className="colorgris-1">
                  <span className="colorgris0">Derechos reservados a</span>{" "}
                  Visión Global
                </p>
              </div>
              <div className="col-4 d-flex justify-content-center colorgris2">
                <p>
                  <span className="mx-2">{iconos.facebook}</span>
                  <span className="mx-2">{iconos.instagram}</span>
                  <span className="mx-2">{iconos.linkedin}</span>
                  <span className="mx-2">{iconos.youtube}</span>
                </p>
              </div>
            </div>
          </div>

          {/* dispositivos chicos */}
          <div
            className="w-auto background-gris d-block d-md-none py-3"
            style={{ "font-size": "3.5vw" }}
          >
            <div className=" w-100 row arial-rounded" id="seccion-footer">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <img src={logoLight} className="h-auto" style={{ width: "40%" }}></img>
              </div>

              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="w-75">
                  <p style={{ "font-size": "80%" }} className="colorgris-1">
                    Sumate al newsletter
                  </p>
                  <div className="">

                    <form className="w-100 ">
                      <label
                        className="w-100 mb-1">
                        <input
                          type="email"
                          placeholder="mail@ejemplo.com"
                          className="w-100 h-100 my-2 ps-2 colorgris0"
                          style={{
                            border: "grey 1px solid",
                            "background-color": "#fff",
                            "border-radius": "4px",
                            "font-size": "50%",
                            padding: '1.7vw 0 '
                          }}
                        />
                      </label>
                      <button
                        className="boton-gris-cuadrado px-4 pt-1 pb-1 w-100"
                        style={{ "white-space": "nowrap", "font-size": "75%" }}
                      >
                        Suscribirme
                      </button>
                    </form>


                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-100 row arial-rounded pt-3"
              style={{ "font-size": "100%" }}
            >
              <div className="col-6 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "80%" }} className="tcolorgris0">
                  Terminos y condiciones
                </p>
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center">
                <p style={{ "font-size": "60%" }} className="colorgris-1">
                  <span className="colorgris-1">Derechos reservados a</span>{" "}
                  Visión Global
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center colorgris2">
                <p>
                  <span className="mx-1">{iconos.facebook}</span>
                  <span className="mx-1">{iconos.instagram}</span>
                  <span className="mx-1">{iconos.linkedin}</span>
                  <span className="mx-1">{iconos.youtube}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      }

    </>
  );
};

export default Footer;
