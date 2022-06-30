import React, { useState } from 'react';
import { iconos } from '../helpers/iconos';

const Modulo = ({ nombre, texto, color, dispositivo }) => {

    console.log(nombre)

    const [mostrarTexto, setMostrarTexto] = useState(false)

    const setMostrarTexto_ = () => {
        if (mostrarTexto) {
            setMostrarTexto(false)
        } else {
            setMostrarTexto(true)
        }
    }

    return (
        <>

            <>
                <div
                    className={color === "claro" ? 'fondo-gris my-4 cursor-pointer' : 'fondo-gris-2 my-4 cursor-pointer'}
                    style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}
                >
                    <p
                        onClick={setMostrarTexto_}
                        style={{ fontSize: dispositivo === "mobile" ? '6.5em' : '2em' }}
                        className='fuente3 my-2'
                    >
                        <span className='color-morado '>
                            {mostrarTexto ? iconos.dropUp : iconos.dropDown}
                        </span>
                        <span className={color === "claro" ? 'ms-3' : 'ms-3 text-white'}>
                            {nombre}
                        </span>
                    </p>
                    {mostrarTexto ?
                        texto.map((parrafo) => {
                            return <p
                                className={color === "claro" ? 'animate__animated animate__fadeIn': 'animate__animated animate__fadeIn text-light'}
                                style={{ fontSize: dispositivo === "mobile" ? '4.5em' : '1.4em' }}
                            >{parrafo}</p>
                        })

                        : null}
                </div>
            </>

            {/* {color === "claro"?
                <>
                    <div className=' fondo-gris my-4 cursor-pointer ' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                        <p onClick={setMostrarTexto_} style={{ fontSize: '2em' }} className='fuente3 my-2'>
                            <span className='color-morado '>
                                {mostrarTexto ? iconos.dropUp : iconos.dropDown}
                            </span>
                            <span className='ms-3 '>
                                {nombre}
                            </span>
                        </p>
                        {mostrarTexto ?
                            texto.map((parrafo) => {
                                return <p className='animate__animated animate__fadeIn' style={{ fontSize: '1.4em' }}>{parrafo}</p>
                            })

                            : null}
                    </div>

                </>
                :
                <div className='fondo-gris-2 my-4 cursor-pointer' style={{ borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                    <p onClick={setMostrarTexto_} style={{ fontSize: '6.5em' }} className='fuente3 my-2 ms-2'>
                        <span className='color-morado '>
                            {mostrarTexto ? iconos.dropUp : iconos.dropDown}
                        </span>
                        <span className='ms-3 text-white'>
                            {nombre}
                        </span>
                    </p>
                    {mostrarTexto ?
                        texto.map((parrafo) => {
                            return <p className='animate__animated animate__fadeIn text-white' style={{ fontSize: '4.5em' }}>{parrafo}</p>
                        })

                        : null}
                </div>
            } */}
        </>
    );
};

export default Modulo;