import React, { useState } from 'react';
import imgDerecha from '../../img/mujerNotebook.png'
import cursosOnline from '../../img/cursosOnline.png'
import { iconos } from '../helpers/iconos';
import { urlServidor } from '../helpers/urlHelper';
import Modulo from './Modulo';

const CuerpoCurso = ({ setShowFormulario, detallesCurso }) => {

    console.log(detallesCurso)

    return (
        <>

            {/* dispositivos grandes */}
            <div className='d-none d-md-block' style={{ fontSize: '0.7vw' }}>
                <div className='row ' style={{ margin: '4vw 5vw', minHeight: "40vw" }}>

                    <div className='col-8'>
                        <div className='contenedor-titulos-cursos'>
                            <h2 className='colorgris1 fuente1' style={{ fontSize: '4em' }}>{detallesCurso.nombre}</h2>
                            <h3 className='colorgris3 fuente1' style={{ fontSize: '2.5em' }}>{detallesCurso.titulo}</h3>
                            <p style={{ fontSize: '1.6em' }} className='fuente3'>
                                {detallesCurso.descripcion_larga}
                            </p>
                        </div>


                        <div>
                            {detallesCurso.subtitulo_1 && detallesCurso.subtitulo_1 !== "" ?
                                <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '2.5em' }}>{detallesCurso.subtitulo_1}</h3>
                                : null}

                            {detallesCurso.parrafos_1 && detallesCurso.parrafos_1 !== "" ? detallesCurso.parrafos_1.map((parrafo) => {
                                return (
                                    <p style={{ fontSize: '1.6em', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                        {parrafo}
                                    </p>
                                )
                            }) : null}

                            {detallesCurso.subtitulo_2 && detallesCurso.subtitulo_2 !== "" ?
                                <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '2.5em' }}>{detallesCurso.subtitulo_2}</h3>
                                : null}
                            
                            {detallesCurso.parrafos_2 && detallesCurso.parrafos_2 !== "" ? detallesCurso.parrafos_2.map((parrafo) => {
                                return (
                                    <p style={{ fontSize: '1.6em', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                        {parrafo}
                                    </p>
                                )
                            }) : null}

                        </div>
                    </div>

                    <div style={{ position: "relative" }} className='col-4 d-flex flex-column align-items-center'>
                        <img src={`${urlServidor}/media/${detallesCurso.imagen}`} style={{ borderRadius: '15px', width: '100%' }}></img>
{/* 
                        <h3 style={{ fontSize: '2.2em', margin: '1vw 0', verticalAlign: "middle", display: "inline-table" }} className='fuente1 colorgris1'>
                            <span className='pe-2' style={{ display: "table-cell", verticalAlign: "middle" }}>Precio</span>
                            <span className='fuente2 ms-0' style={{ fontSize: '1.6em', display: "table-cell", verticalAlign: "middle" }}>AR${detallesCurso.arancel_referencia}</span>
                        </h3> */}

                        <button onClick={() => setShowFormulario(true)} style={{ fontSize: "1.3vw", borderRadius: "1vw" }} className='boton-morado fuente1 my-4'>
                            Consultar ahora
                        </button>
                        <button style={{ fontSize: "1.3vw", borderRadius: "1vw" }} className='boton-morado-outline fuente1 my-2'>
                            {iconos.regalo} <span className='ms-1'>Regalar</span>
                        </button>

                        <div className='d-flex flex-column align-items-center'>
                            <img className='img-cursos-online' src={`${urlServidor}/media/${detallesCurso.imagen_grande}`}></img>
                        </div>
                    </div>

                </div>


                <div className='row bg-white' style={{ margin: '0' }}>

                    <div className='col-8' style={{ padding: ' 0vw 0vw 0vw 6vw', fontSize: '1em' }} >

                        {detallesCurso.titulo_secciones && detallesCurso.titulo_secciones !== "" ?
                            <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '2.5em' }}>{detallesCurso.titulo_secciones}</h3>
                            : null}


                        {detallesCurso.modulos && detallesCurso.modulos.length > 0 ?
                            detallesCurso.modulos.map((modulo) => {
                                return <Modulo nombre={modulo.nombre} texto={[modulo.texto]} color="claro" dispositivo="desktop"></Modulo>
                            })
                            : null}

                        {detallesCurso.examenes && detallesCurso.examenes !== "" ?
                            <Modulo nombre={"Exámenes"} texto={[detallesCurso.examenes]} color="claro" dispositivo="desktop"></Modulo>
                            : null}


                    </div>


                </div>


            </div>


            {/* dispositivos chicos: */}
            <div className='d-block d-md-none' style={{ fontSize: '0.7vw' }}>
                <div className='row ' style={{ margin: '1vw' }}>

                    <div className='col-12'>
                        <div>
                            <h2 className='colorgris1 fuente1' style={{ fontSize: '9em' }}>{detallesCurso.nombre}</h2>
                            <h3 className='colorgris3 fuente1' style={{ fontSize: '6em' }}>{detallesCurso.titulo}</h3>
                            <p style={{ fontSize: '5em' }} className='fuente3'>
                                {detallesCurso.descripcion_larga}
                            </p>
                        </div>
                    </div>



                    <div className='col-12 d-flex flex-column align-items-center'>
                        <img src={imgDerecha} style={{ borderRadius: '15px', width: '100%' }}></img>

                        <h3 style={{ fontSize: '6em', margin: '3vw 0', verticalAlign: "middle", display: "inline-table" }} className='fuente1 colorgris1'>
                            <span className='pe-2' style={{ display: "table-cell", verticalAlign: "middle" }}>Precio</span>
                            <span className='fuente2 ms-0' style={{ fontSize: '1.6em', display: "table-cell", verticalAlign: "middle" }}>AR${detallesCurso.arancel_referencia}</span>
                        </h3>

                        <button onClick={() => setShowFormulario(true)} style={{ fontSize: "4.5vw", borderRadius: "3vw" }} className='boton-morado fuente1 my-2'>
                            Consultar ahora
                        </button>
                        <button style={{ fontSize: "4.5vw", borderRadius: "3vw" }} className='boton-morado-outline fuente1 my-2'>
                            {iconos.regalo} <span className='ms-1'>Regalar</span>
                        </button>
                    </div>

                    <div className='col-12'>

                        {detallesCurso.subtitulo_1 && detallesCurso.subtitulo_1 !== "" && detallesCurso.parrafos_1 && detallesCurso.parrafos_1 !== "" ?
                            <Modulo nombre={detallesCurso.subtitulo_1} texto={detallesCurso.parrafos_1} color="oscuro" dispositivo="mobile"></Modulo>
                            : null}

                        {detallesCurso.subtitulo_2 && detallesCurso.subtitulo_2 !== "" && detallesCurso.parrafos_2 && detallesCurso.parrafos_2 !== "" ?
                            <Modulo nombre={detallesCurso.subtitulo_2} texto={detallesCurso.parrafos_2} color="oscuro" dispositivo="mobile"></Modulo>
                            : null}

                    </div>

                </div>

                <div className=' bg-white'>

                    <div className='row' style={{ margin: '4vw 5vw' }}>

                        <div className='col-12' style={{ fontSize: '0.9vw' }} >
                            <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '7em' }}>{detallesCurso.titulo_secciones}</h3>

                            {detallesCurso.modulos && detallesCurso.modulos.length > 0 ?
                                detallesCurso.modulos.map((modulo) => {
                                    return <Modulo nombre={modulo.nombre} texto={[modulo.texto]} color="claro" dispositivo="mobile"></Modulo>
                                })
                                : null}

                            {detallesCurso.examenes && detallesCurso.examenes !== "" ?
                                <Modulo nombre={"Exámenes"} texto={[detallesCurso.examenes]} color="claro" dispositivo="mobile"></Modulo>
                                : null}
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default CuerpoCurso;