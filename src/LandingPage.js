import React from 'react';

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="d-flex justify-content-center border col-8">
        <h1 className="text-light">
          Encuentra a tu mascota perdida en Rosario
        </h1>

        <div
          className="btn-group mt-2 mb-4"
          role="group"
          aria-label="actionButtons"
        >
          <div>
            <a
              href="http://localhost:3000/login"
              className="d-block btn btn-outline-light"
            >
              <i className="fas fa-paw"></i> Busca mascotas
            </a>
          </div>
          <div>
            <a
              href="http://localhost:3000/login"
              className="d-block btn btn-outline-light"
            >
              <i className="fas fa-dog"></i> Reporta mascotas
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2>
          Esta aplicacion sin ánimos de lucro busca facilitar el proceso de
          búsqueda de mascotas perdidas
        </h2>
      </div>
    </div>
  );
}

export default LandingPage;
