import { React, useState, useEffect } from 'react';
import axios from 'axios';
import UserBar from './UserBar';
import { Button, Table } from 'react-bootstrap';
function Reported() {
  const [imageArray, setImageArray] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [positionArray, setPositionArray] = useState([]);
  const [emailsArray, setEmailsArray] = useState([]);
  const [reportedDogs, setReportedDogs] = useState({});
  function retrieveData() {
    let userid = localStorage.getItem('userid')
      ? localStorage.getItem('userid')
      : 'nodata';
    axios.get(`http://localhost:4000/reported/${userid}`).then((res) => {
      setReportedDogs(res.data.dogs);
      setTimeout(() => defineArrays(), 3000);
    });
  }
  function defineArrays() {
    let amountDogs = Object.keys(reportedDogs).length;
    let emailsArray = [];
    let positionArray = [];
    let imageArray = [];
    let colorArray = [''];
    for (let x = 0; x < amountDogs; x++) {
      emailsArray = [...emailsArray, reportedDogs[x].email];
      positionArray = [...positionArray, reportedDogs[x].position];
      imageArray = [...imageArray, reportedDogs[x].url];

      if (reportedDogs[x].blackColor) {
        colorArray[x] = colorArray[x] ? colorArray[x] + ' Negro ' : 'Negro';
      }
      if (reportedDogs[x].whiteColor) {
        colorArray[x] = colorArray[x] ? colorArray[x] + ' Blanco ' : 'Blanco';
      }
      if (reportedDogs[x].redColor) {
        colorArray[x] = colorArray[x]
          ? colorArray[x] + ' Colorado '
          : 'Colorado';
      }
      if (reportedDogs[x].blondeColor) {
        colorArray[x] = colorArray[x] ? colorArray[x] + ' Rubio ' : 'Rubio';
      }
      if (reportedDogs[x].brownColor) {
        colorArray[x] = colorArray[x] ? colorArray[x] + ' Marrón ' : 'Marrón';
      }
    }
    setEmailsArray(emailsArray);
    setPositionArray(positionArray);
    setImageArray(imageArray);
    setColorArray(colorArray);
    /*   const deleteItem=()=>{

    } */
    console.log('paso por define arrays', emailsArray, colorArray);
  }
  useEffect(retrieveData, []);
  return (
    <div>
      <UserBar />
      <div className="container bg-white border shadow mt-4">
        <Button onClick={retrieveData}>Retrieve data</Button>

        <Table striped bordered hover className="table table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Email de contacto</th>
              <th>Imagen</th>
              <th>Colores</th>
              <th>Coordenadas</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              let renglones = [];
              for (let x = 0; x < emailsArray.length; x++) {
                renglones.push(
                  <tr>
                    <td>{x}</td>
                    <td>{emailsArray[x]}</td>
                    <img
                      className="col d-flex align-items-center justify-content-center"
                      src={imageArray[x]}
                    />
                    <td>{colorArray[x]}</td>
                    <td className="text-wrap">
                      {JSON.stringify(Object.values(positionArray)[x])}
                    </td>
                    <td>
                      <Button variant="danger" /* onClick={deleteItem} */>
                        <i className="far fa-times-circle"></i>
                      </Button>
                    </td>
                  </tr>
                );
              }
              return renglones;
            })()}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Reported;