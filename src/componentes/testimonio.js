import React from 'react';
import '../hojas-de-estilo/testimonio.css'

function Testimonio(props) {
  return (

    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}-testimonio.png`)}
        alt='Fotografía de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-pais-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} para <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>

  );
}

export default Testimonio;