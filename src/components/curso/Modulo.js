import React, { useState } from 'react';
import { iconos } from '../helpers/iconos';

const Modulo = ({ nombre, texto }) => {

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
            <div onClick={setMostrarTexto_} className='fondo-gris my-4 cursor-pointer ' style={{ width: '95%', borderRadius: '10px', padding: '0.5vw 1.5vw' }}>
                <p style={{ fontSize: '2em' }} className='fuente3 my-2'>
                    <span className='color-morado girar_'>
                        {mostrarTexto? iconos.dropUp : iconos.dropDown}
                    </span>
                    <span className='ms-3 girar_'>
                        {nombre}
                    </span>
                </p>
                {mostrarTexto ?
                    <p className='transition-modulos' style={{ fontSize: '1.5em' }}>{texto}</p>
                    : null}
            </div>
        </>
    );
};

export default Modulo;