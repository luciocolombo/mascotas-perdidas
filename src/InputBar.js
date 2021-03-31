import React, {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import Map from './Map'
import axios from 'axios'

function InputBar() {

    const [position, setPosition]=useState("");
    const [email, changeEmail] = useState("");
    const [raza, changeRaza]=useState("");
    const [blackColor, toggleBlackColor]= useState(false);
    const [whiteColor, toggleWhiteColor]= useState(false);
    const [brownColor, toggleBrownColor]= useState(false);
    const [blondeColor, toggleBlondeColor]= useState(false);
    const [redColor, toggleRedColor]= useState(false);
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function sendToDb(){
        if(position!="" & email!="" & blackColor!="" & whiteColor!="" &blondeColor!="" &redColor!=""){
        var dog={position, email,raza,blackColor,whiteColor,brownColor,blondeColor,redColor}
        axios.post('http://localhost:4000/senddog',dog)
        console.log("el siguiente perro sale del frontend", dog)
        }else{alert("Todos los campos requeridos deben ser completados")}
      handleClose()
  }
   /*  const [draggableVisibility, toggleDraggableVisibility]=useState(false) */
    return (
        <div>
            <h1 className="hh1">Encontraste un perro perdido en Rosario?</h1>
            <h2>Completa los datos para comunicarlo a la comunidad. No olvides marcar la posición en el mapa</h2>
            {/*PORQUE NO SE IMPRIME ESTO? <p>{email, raza, blackColor, "asodkasod"}</p> */}
            <Form>
                <Form.Group controlId="formBasicEmailRaza">
                    <Form.Label>Email de contacto</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email" value={email} onChange={(e)=>changeEmail(e.target.value)} />
                    <Form.Label>Conoces la raza del perro?</Form.Label>
                    <Form.Control type="String" placeholder="Introduzca raza si la conoce" value={raza} onChange={(e)=>changeRaza(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <h2>Seleccione hasta 3 colores de perro</h2>
                    <Form.Check type="checkbox" label="Negro" value={blackColor} onChange={(e)=>toggleBlackColor(e.target.checked)}/> 
                    <Form.Check type="checkbox" label="Blanco" value={whiteColor} onChange={(e)=>toggleWhiteColor(e.target.checked)}/>
                    <Form.Check type="checkbox" label="Marron" value={brownColor} onChange={(e)=>toggleBrownColor(e.target.checked)}/>
                    <Form.Check type="checkbox" label="Rubio" value={blondeColor} onChange={(e)=>toggleBlondeColor(e.target.checked)}/>
                    <Form.Check type="checkbox" label="Colorado" value={redColor} onChange={(e)=>toggleRedColor(e.target.checked)}/>
                </Form.Group>

{/* Agregar fecha */}
                <Form.Group>
                    <h2>Subir imagen del perro</h2>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
                <Button onClick={handleShow}> Send to DB
                </Button>                
                <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Sending dog...</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Send dog to DB?</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" type="submit" onClick={sendToDb}>Save to DB</Button>
                            </Modal.Footer>
                </Modal>
               {/*  <Button className="btn btn-info ml-3 mb-1" onClick={()=>{toggleDraggableVisibility(!draggableVisibility)}}>Toggle draggable marker visibility (and show all lost dogs)</Button> */}
            </Form>
            <Map setPosition={setPosition}/* showDraggable={draggableVisibility} *//>
           
        </div>
        
    )
}

export default InputBar