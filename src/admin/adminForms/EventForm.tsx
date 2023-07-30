import React, {useState} from "react"
import { Button, Form } from "react-bootstrap"
import apis from "../../Api"

export const EventForm = () => {

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Cost, setCost] = useState('')
    const [Date, setDate] = useState('')
    const [TimeDoorsOpen, setTimeDoorsOpen] = useState('')
  
    class Event {
      constructor(Date: date, Name: string, Description: string, Cost: number, TimeDoorsOpen: string){
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
      apis.insertEvent(dataCapture)
      window.location.reload()
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' onChange={(e) => setDate(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cost</Form.Label>
                    <Form.Control type='number' onChange={(e) => setCost(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Time Doors Open</Form.Label>
                    <Form.Control onChange={(e) => setTimeDoorsOpen(e.target.value)}/>
                </Form.Group>
                <Button variant="success" onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}