import { Button, Col, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import apis, { deleteEventById } from '../../../Api';
import { useState } from 'react';

function EventCard(Props) {

  const [editMode, setEditMode] = useState(false)

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [Cost, setCost] = useState('')
  const [Date, setDate] = useState('')
  const [TimeDoorsOpen, setTimeDoorsOpen] = useState('')

  class Event {
    constructor(Date: string, Name: string, Description: string, Cost: number, TimeDoorsOpen: string){
      this.Date = Date;
      this.Name = Name;
      this.Description = Description;
      this.Cost = Cost;
      this.TimeDoorsOpen = TimeDoorsOpen;
    }
  }


  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    const Data = new Event(Date, Name, Description, Number(Cost), TimeDoorsOpen)
    const dataCapture = { data: Data}
    apis.updateEventById(Props._id, dataCapture)
    window.location.reload()
  }

  return (
    <>
    <div style={{backgroundColor: 'white', padding: '0px 10px 0px 10px'}} className='rounded-top'>
      <Row className='cardHead rounded-top'>
        <Col>
          {
          editMode 
            ?
            <Form.Control 
              placeholder={`Name: ${Props.data.Name}`}
              onChange={(e) => setName(e.target.value)}
            /> 
            : 
            <Card.Title style={{textAlign: 'left', margin: '8px 20px 8px'}}>{Props.data.Name}</Card.Title>
          }        
        </Col>
        <Col>
          {
            editMode 
            ? 
            <Button variant='danger' style={{float:'right'}} className='closeBtnRight' onClick={() => {setEditMode(false)}}>X</Button> 
            : 
            <></>
          }
        </Col>
      </Row>
      <Card.Body>
        <Row className='d-flex justify-content-center'>
          {
            editMode
            ?  
            <Form.Control as='textarea' 
              style={{margin:'10px 0px', maxWidth: '500px', height: '200px'}}
              placeholder={`Description: ${Props.data.Description}`}
              onChange={(e) => setDescription(e.target.value)}
            /> 
            : 
            <Card.Title className='mt-2 mb-3'>Description: {Props.data.Description}</Card.Title>
          }
        </Row>
        <Row>
          <Col>
            {
            editMode 
            ?  
            <Form.Control 
              placeholder={`Cost: ${Props.data.Cost}`}
              onChange={(e) => setCost(e.target.value)}
            /> 
            : 
            <Card.Title>Cost: {Props.data.Cost}$</Card.Title>
            }
          </Col>
          <Col>
            {
            editMode 
            ?  
            <Form.Control 
              placeholder={`Time Doors Open: ${Props.data.TimeDoorsOpen}`}
              onChange={(e) => setTimeDoorsOpen(e.target.value)}
            /> 
            : 
            <Card.Title>Time Doors Open: {Props.data.TimeDoorsOpen}</Card.Title>
            }
          </Col>
          <Col >
            {
              editMode 
              ?  
              <Form.Control 
                type='date'
                placeholder={`Date: ${Props.data.Date}`}
                onChange={(e) => setDate(e.target.value)}
              /> 
              : 
              <Card.Title>Date: {(Props.data.Date).slice(0, 10)}</Card.Title>
            }
          </Col>
      </Row>
      </Card.Body>
      <Row className='mb-3'>
        <Col>
        </Col>
        <Col className='d-flex flex-row-reverse mb-2 mt-3'>
          {
          editMode ? <></> : <button onClick={() => setEditMode(true)}
          className='border-bottom border-3 rounded-end colorLighter text-light boxHover'
          >Edit</button>
          }
          {
          editMode 
          ? 
            <Button 
              variant="success" 
              onClick={handleSubmit}
            >
              Submit
            </Button> 
          : 
            <button 
              className='border-bottom border-3 rounded-start red text-light boxHover'
              onClick={() => {deleteEventById(Props._id); window.location.reload()}}
            >
              Delete
            </button>
          }
        </Col>
      </Row>
    </div>
    </>
  );
}

export default EventCard;