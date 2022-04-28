import React, { Fragment } from 'react';
import { iconos } from '../helpers/iconos';
import avion from '../../img/avion.png'
import mujer from '../../img/mujer.png'

const Avion = () => {
    return (
        <div
            className="arial-rounded background-azul-mas-oscuro"
            style={{ fontSize: "3vw", padding: "1.6em 0" }}
        >
            <div
                style={{ "background-color": "rgb(29, 33, 60)", margin: "0 5%" }}
                className="p-5 row"
            >
                <div className='col-7'>
                    <div className='row' style={{borderBottom: "solid 0.05em #fff"}}>
                        <div className='col-1 text-light' style={{ fontSize: "0.7em" }}>
                            {iconos.play}
                        </div>
                        <div className='col-11 text-light pb-2' >
                            <p style={{ fontSize: "0.8em" }} className=' m-0'>Facilitar el acceso al conocimiento</p>
                            <p style={{ fontSize: "0.8em" }} className='colorsito-celeste m-0'>tecnológico a distancia</p>
                        </div>
                    </div>
                    <div className='text-light mt-2' style={{fontFamily: 'aventa', fontSize: "0.52em"}}>
                        <p>A efectos de mejorar la capacidad de competir en el mundo globalizado, mediante el dominio de nuevas herramientas</p>
                    </div>
                </div>
                <div className='col-1 text-light'>
                    <img src={avion} style={{width: "130%", position: 'relative', bottom: "1.4em"}}></img>
                </div>
                <div className='col-4 text-light'>
                    <img src={mujer} style={{width: "20%", position: 'absolute', top: "12.5em", right: "3.5em"}}></img>
                </div>
            </div>
        </div>
    );
};

export default Avion;