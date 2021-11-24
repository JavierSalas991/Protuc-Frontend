import React from "react";

const Novedades = () => {
  return (
    <div id="background-azul-oscuro" className="pt-3 pb-2">
        <div className="d-flex justify-content-center" style={{'font-size': '41px'}}>
          <p className="text-light">Novedades</p>
        </div>
        <div style={{'background-color': 'rgb(29, 33, 60)', 'margin' : '0 5%'}}>
            <div className='cuadro-blanco'></div>
        </div>
    </div>
  );
};

export default Novedades;
