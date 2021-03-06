import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function UserBar({ uploadDog, seeAllDogs }) {
  let history = useHistory();

  function deleteAllCookies() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
  }

  function onClick() {
    localStorage.clear();
    deleteAllCookies();
    history.push('/');
  }
  return (
    <div className="sticky-top">
      {/* <div className="d-flex justify-content-between mt-3"> */}
      <Navbar
        bg="light"
        variant="light"
        className="navbar sticky-top border shadow"
      >
        <Navbar.Brand href="#home" className="d-none d-sm-block">
          <i className="fas fa-paw"></i> Mascotas perdidas
          <i className="fas fa-paw"></i>
        </Navbar.Brand>
        <Nav className="mr-auto navlinkuser ">
          <Nav.Link href="/all">Encontrar mascota</Nav.Link>
          <Nav.Link href="/reportar">Reportar mascota</Nav.Link>
          <Nav.Link href="/reported">Mis reportes</Nav.Link>
          <Nav.Link href="/user">Mi perfil</Nav.Link>
          <div className="ml-auto">
            <span className="badge badge-dark mx-1 ">
              {localStorage.getItem('user')
                ? localStorage.getItem('user')
                : 'n/a'}
            </span>
            <Button
              data-toggle="tooltip"
              data-placement="right"
              title="Log off"
              className=" bhover btndanger"
              variant="btn btn-danger"
              onClick={onClick}
            >
              <i className="fa fa-power-off" aria-hidden="true"></i>
            </Button>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default UserBar;
