import React, { useState } from 'react';
import imgDerecha from '../../img/mujerNotebook.png'
import cursosOnline from '../../img/cursosOnline.png'
import { iconos } from '../helpers/iconos';

const CuerpoCurso = ({setShowFormulario}) => {

    const [mostrarDetallesCurso, setMostrarDetallesCurso] = useState(false)

    const setMostrarDetallesCurso_ = () => {
        if (mostrarDetallesCurso) {
            setMostrarDetallesCurso(false)
        } else {
            setMostrarDetallesCurso(true)
        }
    }
    
    return (
        <>
            <div className='d-none d-md-block'>
                <div className='row ' style={{ margin: '4vw 5vw', fontSize: '0.9vw' }}>

                    <div className='col-8'>
                        <div className='contenedor-titulos-cursos'>
                            <h2 className='colorgris1 fuente1' style={{ fontSize: '4em' }}>Cursos Inglés</h2>
                            <h3 className='colorgris3 fuente1' style={{ fontSize: '2.5em' }}>Nivel 1</h3>
                            <p style={{ fontSize: '1.5vw' }} className='fuente3'>
                                La enseñanza de la lengua extranjera es en la actualidad una necesidad
                                imperiosa debido a las transformaciones que se han suscitado en el
                                mundo globalizado
                            </p>
                        </div>
                        <div>
                            <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '2.5em' }}>Acerca del curso</h3>
                            <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                Es por este motivo que el lenguaje debe ser enseñado teniendo en cuenta las
                                diferentes habilidades, necesaria para la comprensión tanto escrita como oral.
                            </p>
                            <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                Las clases son dinámicas, donde se apunta a practicar las cuatro habilidades,
                                es decir, hablar, leer, escuchar y escribir. Se tendrá en cuanta además la
                                pronunciación de las palabras a través de la enseñanza de la fonética,
                                símbolos universales para la correcta dicción de cada vocablo pronunciado.
                            </p>
                            <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                El curso no apunta a la traducción de textos o frases, simplemente es la
                                apoyatura necesaria para comprender el idioma, fundamentalmente en los
                                primeros tiempos en donde el alumno no posee las herramientas necesaria
                                para elaborar diálogos o comprender en forma total un texto. Se utiliza
                                diferentes herramientas para practicar los conocimientos adquiridos de una
                                manera eficaz y útil.
                            </p>
                            <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                Al finalizar este nivel, el alumno es capaz de manejar todas las estructuras
                                básicas del idioma apuntando a conocer los tiempos verbales y vocabulario en
                                general, como así también a desarrollar la escritura, la lectura, la comprensión
                                de audiciones extranjeras y la verbalización de situaciones cotidianas en el
                                idioma enseñado. Como así también está preparado para poder seguir
                                adquiriendo conocimientos en los niveles siguientes.
                            </p>
                        </div>
                    </div>



                    <div className='col-4 d-flex flex-column align-items-center'>
                        <img src={imgDerecha} style={{ borderRadius: '15px', width: '100%' }}></img>

                        <h3 style={{ fontSize: '2.2em', margin: '1vw 0', verticalAlign: "middle", display: "inline-table" }} className='fuente1 colorgris1'>
                            <span className='pe-2' style={{ display: "table-cell", verticalAlign: "middle" }}>Precio</span>
                            <span className='fuente2 ms-0' style={{ fontSize: '1.6em', display: "table-cell", verticalAlign: "middle" }}>AR$4500</span>
                        </h3>

                        <button onClick={() => setShowFormulario(true)} style={{ fontSize: "1.5vw", borderRadius: "1.2vw" }} className='boton-morado fuente1 my-2'>
                            Consultar ahora
                        </button>
                        <button style={{ fontSize: "1.5vw", borderRadius: "1.2vw" }} className='boton-morado-outline fuente1 my-2'>
                            {iconos.regalo} <span className='ms-1'>Regalar</span>
                        </button>
                    </div>

                </div>
                <div className='row bg-white' style={{ margin: '0', fontSize: '0.9vw' }}>

                    <div className='col-8' style={{ padding: ' 0vw 0vw 0vw 6vw', fontSize: '0.9vw' }} >
                        <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '2.5em' }}>Acerca del curso</h3>
                        <div className='fondo-gris my-4 cursor-pointer' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                            <p style={{ fontSize: '2em' }} className='fuente3 my-2'>
                                <span className='color-morado'>
                                    {iconos.dropDown}
                                </span>
                                <span className='ms-3'>
                                    Módulo I
                                </span>
                            </p>
                        </div>
                        <div className='fondo-gris my-4 cursor-pointer' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                            <p style={{ fontSize: '2em' }} className='fuente3 my-2'>
                                <span className='color-morado'>
                                    {iconos.dropDown}
                                </span>
                                <span className='ms-3'>
                                    Módulo II
                                </span>
                            </p>
                        </div>
                        <div className='fondo-gris my-4 cursor-pointer' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                            <p style={{ fontSize: '2em' }} className='fuente3 my-2'>
                                <span className='color-morado'>
                                    {iconos.dropDown}
                                </span>
                                <span className='ms-3'>
                                    Módulo III
                                </span>
                            </p>
                        </div>
                        <div className='fondo-gris my-4 cursor-pointer' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                            <p style={{ fontSize: '2em' }} className='fuente3 my-2'>
                                <span className='color-morado'>
                                    {iconos.dropDown}
                                </span>
                                <span className='ms-3'>
                                    Exámenes
                                </span>
                            </p>
                        </div>
                    </div>



                    <div className='col-4 d-flex flex-column align-items-start'>
                        <div className='d-flex flex-column align-items-center'>
                            <img className='img-cursos-online' src={cursosOnline}></img>
                            <button style={{ fontSize: "1.5vw" }} className='boton-morado-2 fuente2 my-2'>Comenza hoy!
                            </button>
                        </div>
                    </div>

                </div>


            </div>


            {/* dispositivos chicos: */}
            <div className='d-block d-md-none'>
                <div className='row ' style={{ margin: '4vw 5vw', fontSize: '0.9vw' }}>

                    <div className='col-12'>
                        <div>
                            <h2 className='colorgris1 fuente1' style={{ fontSize: '10em' }}>Cursos Inglés</h2>
                            <h3 className='colorgris3 fuente1' style={{ fontSize: '7em' }}>Nivel 1</h3>
                            <p style={{ fontSize: '4vw' }} className='fuente3'>
                                La enseñanza de la lengua extranjera es en la actualidad una necesidad
                                imperiosa debido a las transformaciones que se han suscitado en el
                                mundo globalizado
                            </p>
                        </div>
                    </div>



                    <div className='col-12 d-flex flex-column align-items-center'>
                        <img src={imgDerecha} style={{ borderRadius: '15px', width: '100%' }}></img>

                        <h3 style={{ fontSize: '6em', margin: '3vw 0', verticalAlign: "middle", display: "inline-table" }} className='fuente1 colorgris1'>
                            <span className='pe-2' style={{ display: "table-cell", verticalAlign: "middle" }}>Precio</span>
                            <span className='fuente2 ms-0' style={{ fontSize: '1.6em', display: "table-cell", verticalAlign: "middle" }}>AR$4500</span>
                        </h3>

                        <button  onClick={() => setShowFormulario(true)} style={{ fontSize: "4.5vw", borderRadius: "3vw" }} className='boton-morado fuente1 my-2'>
                            Consultar ahora
                        </button>
                        <button style={{ fontSize: "4.5vw", borderRadius: "3vw" }} className='boton-morado-outline fuente1 my-2'>
                            {iconos.regalo} <span className='ms-1'>Regalar</span>
                        </button>
                    </div>

                    <div className='col-12'>
                        <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '7em' }}>Acerca del curso</h3>
                        <div className='fondo-gris-2 my-4 cursor-pointer' style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                            <p style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                                <span className='color-morado'>
                                    {iconos.dropDown}
                                </span>
                                <span className='ms-3 text-white'>
                                    Módulo I
                                </span>
                            </p>
                        </div>
                        {mostrarDetallesCurso ?
                            <div>
                                <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                    Es por este motivo que el lenguaje debe ser enseñado teniendo en cuenta las
                                    diferentes habilidades, necesaria para la comprensión tanto escrita como oral.
                                </p>
                                <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                    Las clases son dinámicas, donde se apunta a practicar las cuatro habilidades,
                                    es decir, hablar, leer, escuchar y escribir. Se tendrá en cuanta además la
                                    pronunciación de las palabras a través de la enseñanza de la fonética,
                                    símbolos universales para la correcta dicción de cada vocablo pronunciado.
                                </p>
                                <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                    El curso no apunta a la traducción de textos o frases, simplemente es la
                                    apoyatura necesaria para comprender el idioma, fundamentalmente en los
                                    primeros tiempos en donde el alumno no posee las herramientas necesaria
                                    para elaborar diálogos o comprender en forma total un texto. Se utiliza
                                    diferentes herramientas para practicar los conocimientos adquiridos de una
                                    manera eficaz y útil.
                                </p>
                                <p style={{ fontSize: '1.4vw', lineHeight: '1.6vw' }} className='fuente4 colorgris2'>
                                    Al finalizar este nivel, el alumno es capaz de manejar todas las estructuras
                                    básicas del idioma apuntando a conocer los tiempos verbales y vocabulario en
                                    general, como así también a desarrollar la escritura, la lectura, la comprensión
                                    de audiciones extranjeras y la verbalización de situaciones cotidianas en el
                                    idioma enseñado. Como así también está preparado para poder seguir
                                    adquiriendo conocimientos en los niveles siguientes.
                                </p>
                            </div>
                            : null}

                    </div>

                </div>
                
                <div className=' bg-white'>

                    <div className='row' style={{ margin: '4vw 5vw', fontSize: '0.9vw' }}>

                        <div className='col-12' style={{ fontSize: '0.9vw' }} >
                            <h3 className='colorgris1 fuente1 mt-4' style={{ fontSize: '7em' }}>Temario del curso</h3>
                            <div className='fondo-gris my-4 cursor-pointer' style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                                <p style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                                    <span className='color-morado'>
                                        {iconos.dropDown}
                                    </span>
                                    <span className='ms-3'>
                                        Módulo I
                                    </span>
                                </p>
                            </div>
                            <div className='fondo-gris my-4 cursor-pointer' style={{borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                                <p style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                                    <span className='color-morado'>
                                        {iconos.dropDown}
                                    </span>
                                    <span className='ms-3'>
                                        Módulo II
                                    </span>
                                </p>
                            </div>
                            <div className='fondo-gris my-4 cursor-pointer' style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                                <p style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                                    <span className='color-morado'>
                                        {iconos.dropDown}
                                    </span>
                                    <span className='ms-3'>
                                        Módulo III
                                    </span>
                                </p>
                            </div>
                            <div className='fondo-gris my-4 cursor-pointer' style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                                <p style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                                    <span className='color-morado'>
                                        {iconos.dropDown}
                                    </span>
                                    <span className='ms-3'>
                                        Exámenes
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default CuerpoCurso;