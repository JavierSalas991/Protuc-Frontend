import React, {useEffect} from "react";
import { Carousel } from "react-bootstrap";
import fondoCeleste from "../../img/fondoCeleste.png";

const NuestroStaff = () => {

    let staffPrueba = [
        {
            id: 1,
            nombre: 'ejemplo 1',
            especialidad: 'especialidad'
        }, {
            id: 2,
            nombre: 'ejemplo 2',
            especialidad: 'especialidad'
        }, {
            id: 3,
            nombre: 'ejemplo 3',
            especialidad: 'especialidad'
        }, {
            id: 4,
            nombre: 'ejemplo 4',
            especialidad: 'especialidad'
        }, {
            id: 5,
            nombre: 'ejemplo 5',
            especialidad: 'especialidad'
        }, {
            id: 6,
            nombre: 'ejemplo 6',
            especialidad: 'especialidad'
        }, {
            id: 7,
            nombre: 'ejemplo 7',
            especialidad: 'especialidad'
        }

    ]


    const construirArregle = () => {
        let staffSeparado = []
        // staffPrueba.map(())
        staffSeparado[0].push('hola')
        console.log(staffSeparado)
    }

    useEffect(() => {
        construirArregle()
    }, [])

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={fondoCeleste} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={fondoCeleste} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fondoCeleste} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default NuestroStaff;
