import React from 'react';

function Navbarr() {
  return (
    <div className="d-flex my-4 navbarra">
      <a
        href="http://localhost:3000/login"
        className="d-block btn btn-primary mr-3 navbarra"
      >
        <i className="fas fa-dog"></i> Reporta mascotas
      </a>
      <a
        href="http://localhost:3000/login"
        className="d-block btn  btn-primary navbarra"
      >
        <i className="fas fa-paw"></i> Encontá tu mascota
      </a>
    </div>
  );
}

export default Navbarr;