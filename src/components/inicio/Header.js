import React, {Fragment} from 'react';
import Carrousel from './Carrousel';
import NavbarProtuc from './NavbarProtuc';
import './Inicio.css'

const Header = () => {
    return (
        <Fragment>
            <NavbarProtuc/>
            <Carrousel/>
        </Fragment>
    );
};

export default Header;