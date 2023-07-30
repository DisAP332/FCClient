import { Button, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import apis, { deleteDrinkById } from '../../../Api';
import { useState } from 'react';

function DrinkCard(Props) {

  const [editMode, setEditMode] = useState(false)

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [Cost, setCost] = useState('')


  class Drink {
    constructor(Name: string, Description: string, Cost: number){
      this.Name = Name;
      this.Description = Description;
      this.Cost = Cost;
    }
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    const Data = new Drink(Name, Description, Number(Cost))
    const dataCapture = { data: Data}
    apis.updateDrinkById(Props._id, dataCapture)
    window.location.reload()
  }


  return (
    <>
    <div className='adminCard'>
      <Card.Title>
        {
          editMode ? <Button onClick={() => setEditMode(false)}>X</Button> : <></>
        }
        {
          editMode
          ? 
          <Form.Control
            placeholder={`Name: ${Props.data.Name}`}
            onChange={(e) => setName(e.target.value)}
          />
          :
          <Card.Title>{Props.data.Name}</Card.Title>
        }
      </Card.Title>
      <Card.Body>
        <Row>
          {
            editMode
            ?  
            <Form.Control 
              placeholder={`Description: ${Props.data.Description}`}
              onChange={(e) => setDescription(e.target.value)}
            /> 
            : 
            <Card.Title>{Props.data.Description}</Card.Title>
          }
        </Row>
        {
          editMode 
          ?  
          <Form.Control 
            placeholder={`Cost: ${Props.data.Cost}`}
            onChange={(e) => setCost(e.target.value)}
          /> 
          : 
          <Card.Title>{Props.data.Cost}</Card.Title>
        }
      </Card.Body>
      {
        editMode ? <></> : <Button onClick={() => setEditMode(true)}>Edit</Button>
      }
      {
        editMode ? <Button onClick={handleSubmit}>Submit</Button> : <Button onClick={() => {deleteDrinkById(Props._id);  window.location.reload()}}>Delete</Button>
      }
      {/* <Button onClick={() => {deleteEventById(Props._id); window.location.reload()}}>Delete</Button> */}
    </div>
    </>
  );
}

export default DrinkCard;