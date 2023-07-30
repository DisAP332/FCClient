import { Button, Col, Container, Row } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import api from '../Api'
import { Events } from "./adminDisplays/Events";
import { Drinks } from "./adminDisplays/Drinks";
import { Form } from './Form'


// Data fetching happens at the begining of each refresh. Any edit, deletion, or addition of data will refresh screening
// resulting in a new fetch of the data.

let events: object;
let drinks: object;

const fetchEventsData = async () => {
    const Data = await api.getAllEvents()
    events = Data
}

const fetchDrinksData = async () => {
    const Data = await api.getAllDrinks()
    drinks = Data
}

fetchEventsData()
fetchDrinksData()

// End data fetching. Begin admin module.

export const Admin = () => {

    // states to manage visiblities for admin
    const [showAdminDrink, setShowAdminDrink] = useState(false)
    const [showAdminNotice, setShowAdminNotice] = useState(false)
    const [showAdminAdver, setShowAdminAdver] = useState(false)
    const [showAdminEvent, setShowAdminEvent] = useState(false)

    const [showFormModal, setShowFormModal] = useState(false)

    const handleCloseFormModal = () => setShowFormModal(false)
    const handleShowFormModal = () => setShowFormModal(true)

    const [formMode, setFormMode] = useState('')

    function visibilityHelper(){
        setShowAdminAdver(false)
        setShowAdminEvent(false)
        setShowAdminNotice(false)
        setShowAdminDrink(false)
    }

    function visibilityChanger(mode: string){
        visibilityHelper()
        if(mode === 'events'){ setShowAdminEvent(true);}
        if(mode === 'drinks'){ setShowAdminDrink(true)}
        if(mode === 'notice'){ setShowAdminNotice(true)}
        if(mode === 'adver'){ setShowAdminAdver(true)}
    }
    // end visiblity helpers

    console.log('rerend of admin')

    return (
        <>
        <Form 
            handleHide = {handleCloseFormModal}
            handleShow = {handleShowFormModal}
            hideOrShow = {showFormModal}
            formMode = {formMode}
        />
        
<Container>
    <Row>
        {/* here is the admin nav */}
        <Col>
        <div onClick={() => {visibilityChanger('events'); setFormMode('Event-Form')}}  
        style={{backgroundColor: 'white', color: 'black'}} className="rounded-top border-bottom border-4 mb-3 pt-1 boxHover">
            <h2>Events</h2>
        </div>
        <div onClick={() => {visibilityChanger('drinks'); setFormMode('Drink-Form')}} 
        style={{backgroundColor: 'white', color: 'black'}} className="rounded-top border-bottom border-4 mb-3 pt-1 boxHover">
            <h2>Drinks</h2>
        </div>
        {/* <div style={{backgroundColor: 'white', color: 'black'}} className="rounded-top border-bottom border-4 mb-3 pt-1 boxHover">
            <h2 onClick={() => visibilityChanger('notice')}>Notices</h2>
        </div>
        <div style={{backgroundColor: 'white', color: 'black'}} className="rounded-top border-bottom border-4 mb-3 pt-1 boxHover">
            <h2 onClick={() => visibilityChanger('adver')}>Advertisments</h2>
        </div> */}
        </Col>
        {/* Admin cont */}
        <Col style={{color: 'black'}}>
        <div className="d-flex justify-content-end">
            <Button 
                className="p-3 position-absolute"
                onClick={() =>{ setShowFormModal(true); console.log(showFormModal)}}
            >
                +
            </Button>
        </div>
        {
            showAdminEvent ? <Events events={events} /> : <></>
        }
        {
            showAdminDrink ? <Drinks drinks={drinks} /> : <></>
        }
        </Col>
    </Row>
</Container>
        </>
    )
}