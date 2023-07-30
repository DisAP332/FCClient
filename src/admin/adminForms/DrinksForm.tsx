import React, {useState} from "react"
import { Button, Form } from "react-bootstrap"
import apis from "../../Api"

export const DrinksForm = () => {

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
        const dataCapture = { data: Data }
        console.log(dataCapture)
        apis.insertDrink(dataCapture)       
        window.location.reload()
    }


    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Drink Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cost</Form.Label>
                    <Form.Control onChange={(e) => setCost(e.target.value)}/>
                </Form.Group>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
        </>
    )
}