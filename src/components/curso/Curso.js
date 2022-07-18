import React, { useState, useEffect } from 'react';
import Footer from '../common/Footer';
import PublicidadHeader from '../common/PublicidadHeader';
import ModalFromulario from '../formulario/ModalFromulario';
import NavHamburguesa from '../inicio/NavHamburguesa';
import CuerpoCurso from './CuerpoCurso';
import NavbarCurso from './NavbarCurso';
import { useParams } from 'react-router-dom';
import { urlServidor } from '../helpers/urlHelper';
import Axios from 'axios';

const Curso = ({ infoGeneral }) => {

    const { id } = useParams();
    const [detallesCurso, setDetallesCurso] = useState(null)

    const getCurso = async () => {
        const res = await Axios.get(`${urlServidor}/protucapi/curso/${id}`);
        setDetallesCurso(res) ;
    };

    useEffect(() => {
        getCurso()
    }, [id])

    const [showFormulario, setShowFormulario] = useState(false);
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
            {detallesCurso ?
                <CuerpoCurso setShowFormulario={setShowFormulario} detallesCurso={detallesCurso.data}></CuerpoCurso>
                : null}
            <Footer color='light'></Footer>
            <ModalFromulario show={showFormulario} handleClose={handleCloseFormulario}></ModalFromulario>
        </div>
    );
};

export default Curso;