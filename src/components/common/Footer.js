import React from "react";
import logo from "../../img/logos/ProTuc_Identidad_Logotipov2.2_png.png";
import { Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className='w-auto background-azul-oscuro '>
      <div
        className=" w-100 row arial-rounded"
        style={{ "font-size": "2vw" }}
        id="seccion-footer"
      >
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
              <form className="">
                <div
                  style={{ "border-radius": "4px", "font-size": "50%" }}
                  className="bg-light w-100  mb-3"
                >
                  <label className="w-100" controlId="">
                    <input
                      type="email"
                      placeholder="mail@ejemplo.com"
                      className="w-100 my-2 ps-2"
                      style={{
                        border: "none",
                        "background-color": "transparent",
                      }}
                    />
                  </label>
                </div>
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
    </div>
  );
};

export default Footer;
