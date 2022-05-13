import React from 'react';
import Footer from '../common/Footer';
import PublicidadHeader from '../common/PublicidadHeader';
import NavHamburguesa from '../inicio/NavHamburguesa';
import CuerpoCurso from './CuerpoCurso';
import NavbarCurso from './NavbarCurso';

const Curso = ({ infoGeneral }) => {
    return (
        <div className='fondo-gris'>
            {infoGeneral.banner_header[0].activo ? (
                <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
            ) : null}
            <NavHamburguesa></NavHamburguesa>
            <NavbarCurso></NavbarCurso>
            <CuerpoCurso></CuerpoCurso>
            <Footer color='light'></Footer>

        </div>
    );
};

export default Curso;