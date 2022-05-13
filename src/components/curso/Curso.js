import React, {useState} from 'react';
import Footer from '../common/Footer';
import PublicidadHeader from '../common/PublicidadHeader';
import ModalFromulario from '../formulario/ModalFromulario';
import NavHamburguesa from '../inicio/NavHamburguesa';
import CuerpoCurso from './CuerpoCurso';
import NavbarCurso from './NavbarCurso';

const Curso = ({ infoGeneral }) => {

    //modal form
    const [showFormulario, setShowFormulario] = useState(true);
    const handleCloseFormulario = () => {
        setShowFormulario(false);
    }

    return (
        <div className='fondo-gris'>
            {infoGeneral.banner_header[0].activo ? (
                <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
            ) : null}
            <NavHamburguesa></NavHamburguesa>
            <NavbarCurso></NavbarCurso>
            <CuerpoCurso></CuerpoCurso>
            <Footer color='light'></Footer>
            <ModalFromulario show={showFormulario} handleClose={handleCloseFormulario}></ModalFromulario>
        </div>
    );
};

export default Curso;