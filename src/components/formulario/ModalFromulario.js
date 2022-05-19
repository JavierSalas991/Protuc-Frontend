import React from "react";
import Modal from "react-bootstrap/Modal";
import imagen from "../../img/img_form.jpg";

const ModalFromulario = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        size="lg"
        className="p-0 m-0"
      >
        {/* dispositivos grandes: */}
        <div className="d-none d-md-block background-azul-modal">
          <div className="row m-0 p-0">
            <div className="col-6 m-0 p-0  h-100">
              <div
                className=" m-0 d-flex flex-column justify-content-center align-items-center"
                style={{ padding: "0.8vw 1.5vw" }}
              >
                <p
                  className="text-light fuente2 m-0 p-0 text-center"
                  style={{ fontSize: "2.4vw" }}
                >
                  Sumate a Protuc
                </p>
                <p
                  className="colorsito-celeste fuente3 m-0 p-0  text-center"
                  style={{ fontSize: "1.8vw" }}
                >
                  Dejanos tu consulta!
                </p>
                <p
                  className="text-light fuente3 text-center mt-2 mb-0 p-0"
                  style={{ fontSize: "1.1vw" }}
                >
                  Un asesor educativo te está esperando por asesoramiento!
                </p>

                <div className="px-4 pt-1 w-100 d-flex flex-column align-items-start">
                  <p
                    className="text-light fuente2 mb-0"
                    style={{ fontSize: "1.2vw" }}
                  >
                    Nombre
                  </p>
                  <form className="w-100 text-light" style={{ height: "2.8vw" }}>
                    <label className="w-100 h-100" controlId="">
                      <input
                        type="email"
                        className="w-100 h-100 my-2 ps-2"
                        style={{
                          border: "3px solid #3D405B",
                          backgroundColor: "#2C2F48",
                          borderRadius: "7px",
                        }}
                      />
                    </label>
                  </form>
                </div>
                <div className="px-4 pt-3 mb-1 w-100 d-flex flex-column align-items-start">
                  <p
                    className="text-light fuente2 mb-0"
                    style={{ fontSize: "1.2vw" }}
                  >
                    Número de Celular
                  </p>
                  <form className="w-100 text-light" style={{ height: "2.8vw" }}>
                    <label className="w-100 h-100" controlId="">
                      <input
                        type="email"
                        className="w-100 h-100 my-2 ps-2"
                        style={{
                          border: "3px solid #3D405B",
                          backgroundColor: "#2C2F48",
                          borderRadius: "7px",
                        }}
                      />
                    </label>
                  </form>
                </div>
                <button
                  className="fuente3 text-light mt-4"
                  style={{
                    padding: "1vw 4vw",
                    border: "none",
                    borderRadius: "6px",
                    backgroundColor: "#8D8D9D",
                    color: "#C2C9C6",
                  }}
                >
                  <strong>Conversemos</strong>
                </button>
                <p
                  onClick={handleClose}
                  className="colorsito-celeste fuente2 mt-2 mb-0 pt-2 cursor-pointer text-center"
                  style={{ fontSize: "1.2vw" }}
                >
                  Cerrar
                </p>
              </div>
            </div>
            <div className="col-6 m-0 p-0  h-100">
              <img src={imagen} className="w-100 h-auto m-0 p-0"></img>
            </div>
          </div>
        </div>

        {/* dispositivos chicos: */}
        <div
          className="d-block d-md-none background-azul-modal d-flex flex-column justify-content-center align-items-center"
          style={{ padding: "7vw" }}
        >
          <p
            className="text-light fuente2 mb-0 mt-3 text-center"
            style={{ fontSize: "7.5vw" }}
          >
            Sumate a Protuc
          </p>
          <p
            className="colorsito-celeste fuente3 mt-0  text-center"
            style={{ fontSize: "5.3vw" }}
          >
            Dejanos tu consulta!
          </p>
          <p
            className="text-light fuente3 text-center"
            style={{ fontSize: "3.2vw" }}
          >
            Un asesor educativo te está esperando por asesoramiento!
          </p>

          <div className="p-3 w-100 d-flex flex-column align-items-start">
            <p
              className="text-light fuente2 mb-0"
              style={{ fontSize: "3.5vw" }}
            >
              Nombre
            </p>
            <form className="w-100 " style={{ height: "12vw" }}>
              <label className="w-100 h-100" controlId="">
                <input
                  type="email"
                  className="w-100 h-100 my-2 ps-2"
                  style={{
                    border: "3px solid #3D405B",
                    backgroundColor: "#2C2F48",
                    borderRadius: "7px",
                  }}
                />
              </label>
            </form>
          </div>
          <div className="p-3 w-100 d-flex flex-column align-items-start">
            <p
              className="text-light fuente2 mb-0"
              style={{ fontSize: "3.5vw" }}
            >
              Número de Celular
            </p>
            <form className="w-100 " style={{ height: "12vw" }}>
              <label className="w-100 h-100" controlId="">
                <input
                  type="email"
                  className="w-100 h-100 my-2 ps-2"
                  style={{
                    border: "3px solid #3D405B",
                    backgroundColor: "#2C2F48",
                    borderRadius: "7px",
                  }}
                />
              </label>
            </form>
          </div>
          <button
            className="fuente3 text-light mt-4"
            style={{
              padding: "3vw 10vw",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#8D8D9D",
              color: "#C2C9C6",
            }}
          >
            <strong>Conversemos</strong>
          </button>
          <p
            onClick={handleClose}
            className="colorsito-celeste fuente2 mt-4 mb-0 pt-2 cursor-pointer text-center"
            style={{ fontSize: "3vw" }}
          >
            Cerrar
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalFromulario;
