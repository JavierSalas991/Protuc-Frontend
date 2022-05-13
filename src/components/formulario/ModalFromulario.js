import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalFromulario = ({ show, handleClose }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={true} size="xl">

                {/* dispositivos chicos: */}
                <div className='d-block d-md-none background-azul-modal d-flex flex-column justify-content-center align-items-center' style={{ padding: "7vw" }}>
                    <p className='text-light fuente2 mb-0 mt-3 text-center' style={{ fontSize: '7.5vw' }}>Sumate a Protuc</p>
                    <p className='colorsito-celeste fuente3 mt-0  text-center' style={{ fontSize: '5.3vw' }}>Dejanos tu consulta!</p>
                    <p className='text-light fuente3 text-center' style={{ fontSize: '3.2vw' }}>Un asesor educativo te está esperando
                        por asesoramiento!</p>

                    <div className='p-3 w-100 d-flex flex-column align-items-start'>
                        <p className='text-light fuente2 mb-0' style={{ fontSize: '3.5vw' }}>Nombre</p>
                        <form className="w-100 " style={{ height: '12vw' }}>
                            <label className="w-100 h-100" controlId="" >
                                <input
                                    type="email"

                                    className="w-100 h-100 my-2 ps-2"
                                    style={{
                                        border: "3px solid #3D405B",
                                        backgroundColor: "#2C2F48",
                                        borderRadius: '7px'
                                    }}
                                />
                            </label>
                        </form>
                    </div>
                    <div className='p-3 w-100 d-flex flex-column align-items-start'>
                        <p className='text-light fuente2 mb-0' style={{ fontSize: '3.5vw' }}>Número de Celular</p>
                        <form className="w-100 " style={{ height: '12vw' }}>
                            <label className="w-100 h-100" controlId="" >
                                <input
                                    type="email"

                                    className="w-100 h-100 my-2 ps-2"
                                    style={{
                                        border: "3px solid #3D405B",
                                        backgroundColor: "#2C2F48",
                                        borderRadius: '7px'
                                    }}
                                />
                            </label>
                        </form>
                    </div>
                    <button
                        className='fuente3 text-light mt-4'
                        style={{padding: "3vw 10vw", border: 'none', borderRadius: '6px', backgroundColor: '#8D8D9D', color:'#C2C9C6'}}
                    >
                        <strong>Conversemos</strong>
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default ModalFromulario;