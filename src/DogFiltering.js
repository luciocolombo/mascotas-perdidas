import { React, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import MapAllDogs from './MapAllDogs';
import UserBar from './UserBar';
import Footer from './Footer';
import { Tooltip, OverlayTrigger, Badge, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DogFiltering() {
  const [blackColor, toggleBlackColor] = useState(false);
  const [whiteColor, toggleWhiteColor] = useState(false);
  const [brownColor, toggleBrownColor] = useState(false);
  const [blondeColor, toggleBlondeColor] = useState(false);
  const [redColor, toggleRedColor] = useState(false);
  const [sex, setSex] = useState('Macho');
  const [size, setSize] = useState('Mediano');
  const [catdog, setCatDog] = useState('Perro');
  const auxDate = new Date();
 const threeMonthsAgo=new Date(auxDate.setDate(auxDate.getDate() - 90))


  const [date, onChange] = useState(threeMonthsAgo); //calendar
  const [date2, onChange2] = useState(new Date()); //calendar
  const [calendarDisplay, calendarDisplayChange] = useState(false);
  const [calendarDisplay2, calendarDisplayChange2] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Conjunto incluyente (Una mascota puede ser buscado por cualquiera de sus
      colores o suma de ellos)
    </Tooltip>
  );
  useEffect(() => calendarDisplayChange(false), [date]);
  useEffect(() => calendarDisplayChange2(false), [date2]);
  useEffect(() => {
    if (catdog === 'Gato') {
      setSize('Pequeño');
    }
  }, [catdog]);
  return (
    <div>
      <UserBar seeAllDogs="disabled" />
      <div className="container bg-white border shadow pl-4 pt-3 ">
        <h4 className="text-center">
          <i className="fas fa-paw"></i>Seleccione características para
          encontrar su mascota
        </h4>
        <Form.Group controlId="formBasicCheckbox">
          <div className="row">
            <div /* className="col-4" */>
              <h6>
                <i className="fas fa-palette"></i>Colores{' '}
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 50, hide: 300 }}
                  overlay={renderTooltip}
                >
                  <Badge pill variant="secondary">
                    ?
                  </Badge>
                </OverlayTrigger>
              </h6>

              <Form.Check
                type="checkbox"
                label="Negro"
                value={blackColor}
                onChange={(e) => toggleBlackColor(e.target.checked)}
                id="Negro"
              />
              <Form.Check
                type="checkbox"
                label="Blanco"
                value={whiteColor}
                onChange={(e) => toggleWhiteColor(e.target.checked)}
                id="Blanco"
              />
              <Form.Check
                type="checkbox"
                label="Marron"
                value={brownColor}
                onChange={(e) => toggleBrownColor(e.target.checked)}
                id="Marron"
              />
              <Form.Check
                type="checkbox"
                label="Rubio"
                value={blondeColor}
                onChange={(e) => toggleBlondeColor(e.target.checked)}
                id="Rubio"
              />
              <Form.Check
                type="checkbox"
                label="Colorado"
                value={redColor}
                onChange={(e) => toggleRedColor(e.target.checked)}
                id="Colorado"
              />
            </div>
            <div /* className="col-4" */>
              <h6>
                <i className="fas fa-venus-mars"></i>Seleccione el sexo
              </h6>
              <Form.Check
                type="radio"
                label="Macho"
                value="macho"
                name="sex"
                onChange={() => setSex('Macho')}
                defaultChecked
                id="Macho"
              />
              <Form.Check
                type="radio"
                label="Hembra"
                value="hembra"
                name="sex"
                onChange={() => setSex('Hembra')}
                id="Hembra"
              />
              {/*  <Form.Check
                type="radio"
                label="?"
                value="?"
                name="sex"
                defaultChecked
                onChange={() => setSex('?')}
                id="?"
              /> */}
            </div>
            <div /* className="col-4" */>
              <h6 className="marginmobile">
                <i className="fas fa-ruler"></i>Seleccione el tamaño
              </h6>
              <Form.Check
                type="radio"
                label="Pequeño"
                value="Pequeño"
                name="size"
                onChange={() => setSize('Pequeño')}
                disabled={catdog === 'Gato' ? true : false}
                id="Pequeño"
              />
              <Form.Check
                type="radio"
                label="Mediano"
                value="Mediano"
                name="size"
                defaultChecked
                onChange={() => setSize('Mediano')}
                disabled={catdog === 'Gato' ? true : false}
                id="Mediano"
              />
              <Form.Check
                type="radio"
                label="Grande"
                value="Grande"
                name="size"
                onChange={() => setSize('Grande')}
                disabled={catdog === 'Gato' ? true : false}
                id="Grande"
              />
            </div>
            <Form.Group controlId="catdog">
              <h6 className="marginmobile">
                <i class="fas fa-cat"></i>
                Perro o gato?
              </h6>
              <div key="default-radio2" className="mb-3">
                <Form.Check
                  name="dog"
                  value="catdog"
                  type="radio"
                  id="gato"
                  label="Gato"
                  onClick={() => setCatDog('Gato')}
                />
                <Form.Check
                  name="dog"
                  value="dog"
                  type="radio"
                  id="perro"
                  label="Perro"
                  defaultChecked
                  onClick={() => setCatDog('Perro')}
                />
              </div>
            </Form.Group>

            <div className="w-100">
              {date > date2 ? (
                <div className="alert alert-danger" role="alert">
                  Compruebe validez de las fechas
                </div>
              ) : (
                ''
              )}
            </div>
            <div>
              <div className="d-flex justify-content-center calendardiv">
                <Button
                  variant="outline-secondary"
                  onClick={() => calendarDisplayChange(!calendarDisplay)}
                >
                  Fecha inicial:{' '}
                  <Badge pill variant="info">
                    {JSON.stringify(date).substring(1, 11)}
                  </Badge>
                </Button>
              </div>
              {calendarDisplay ? (
                <Calendar onChange={onChange} value={date} />
              ) : (
                ''
              )}
            </div>
            <div>
              <div className="d-flex justify-content-center calendardiv">
                <Button
                  variant="outline-secondary"
                  onClick={() => calendarDisplayChange2(!calendarDisplay2)}
                >
                  Fecha Final:{' '}
                  <Badge pill variant="primary">
                    {JSON.stringify(date2).substring(1, 11)}
                  </Badge>
                </Button>
              </div>
              {calendarDisplay2 ? (
                <Calendar onChange={onChange2} value={date2} />
              ) : (
                ''
              )}
            </div>
          </div>
        </Form.Group>
        <MapAllDogs
          black={blackColor}
          white={whiteColor}
          red={redColor}
          blonde={blondeColor}
          brown={brownColor}
          sex={sex}
          size={size}
          date={date}
          date2={date2}
          catdog={catdog}
        />
      </div>
      <Footer />
    </div>
  );
}

export default DogFiltering;
