import React from 'react';
import PublicidadHeader from '../common/PublicidadHeader';

const Curso = ({ infoGeneral }) => {
    return (
        <div>
            {infoGeneral.banner_header[0].activo ? (
                <PublicidadHeader banner_header={infoGeneral.banner_header[0]} />
            ) : null}
        </div>
    );
};

export default Curso;