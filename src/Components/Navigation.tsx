import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import Banner from '../Images/FrenchConnectionLogoBlack.svg'
import { AboutUsModal } from "../Modals/AboutUsModal"
import { AmenitiesModal } from "../Modals/AmenitiesModal"

import { EventsModal } from "../Modals/EventsModal"
import { ContactModal } from "../Modals/ContactModal"

export const Navigation = (Props: { events: any }) => {

    const [showAboutUsModal, setShowAboutUsModal] = useState(false)

    const handleCloseAboutUs = () => setShowAboutUsModal(false)
    const handleShowAboutUs = () => setShowAboutUsModal(true)

    const [showAmenitiesModal, setShowAmenitiesModal] = useState(false)

    const handleCloseAmenities = () => setShowAmenitiesModal(false)
    const handleShowAmenities = () => setShowAmenitiesModal(true)

    const [showEventsModal, setShowEventsModal] = useState(false)

    const handleCloseEvents = () => setShowEventsModal(false)
    const handleShowEvents = () => setShowEventsModal(true)

    const [showContactModal, setShowContactModal] = useState(false)

    const handleCloseContact = () => setShowContactModal(false)
    const handleShowContact = () => setShowContactModal(true)

    return (
        <div>
            <AboutUsModal show={showAboutUsModal} onHide={handleCloseAboutUs}/>
            <AmenitiesModal show={showAmenitiesModal} onHide={handleCloseAmenities}/>
            <ContactModal show={showContactModal} onHide={handleCloseContact} />
            <EventsModal show={showEventsModal} onHide={handleCloseEvents} events={Props.events}/>

            <Container className="d-none d-lg-block" fluid>
                <Row className="d-flex flex-row align-items-end">
                    <Col>
                        <h1 className="sexyFont" style={{fontSize: '4vw'}}>Come for the Drinks</h1>
                    </Col>
                    <Col>
                        <img src={Banner} alt='Logo' className="banner"/>
                    </Col>
                    <Col>
                        <h1 className="sexyFont" style={{fontSize: '4vw'}}>Stay for the company...</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex flex-row justify-content-center navHelper transparentBackground">
                        <a href="/FCClient/">Home</a>
                        <h2>|</h2>
                        <a href="/FCClient/about">About us</a>
                        <h2>|</h2>
                        <a href="/FCClient/amenities">Amenities</a>
                        <h2>|</h2>
                        <a href="/FCClient/events">Events</a>
                        <h2>|</h2>
                        <a href='/FCClient/contact'>Contact</a>
                    </Col>
                </Row>
            </Container>


            <div className="d-none d-md-flex d-lg-none flex-column">
                <div style={{color: 'black', width: '30vw'}}>
                    <img src={Banner} alt="French Connection Logo" style={{width: 'calc(200px + 10vw)'}} className="mt-2 ms-5"/> 
                    <div className="d-flex justify-content-start flex-column ms-3 md-nav-helper" style={{width: '350px'}}>
                        <h2 style={{fontSize: '40px'}} onClick={() => handleShowAboutUs()}>About us</h2>
                        <h2 onClick={() => handleShowAmenities()}>Amenities</h2>
                        <h2 onClick={() => handleShowEvents()}>Events</h2>
                        <h2 onClick={() => handleShowContact()}>Contact</h2>
                    </div>
                </div>
                
            </div>

            <div className="d-flex d-md-none flex-row">
                <div style={{color: 'black', width: '30vw'}}>
                    <img src={Banner} alt="French Connection Logo" style={{width: 'calc(130px + 10vw)'}} className="mt-4 ms-2"/> 
                    <div className="d-flex justify-content-start flex-column ms-3 sm-nav-helper">
                        <h2 style={{fontSize: '40px'}} onClick={() => handleShowAboutUs()}>About us</h2>
                        <h2 onClick={() => handleShowAmenities()}>Amenities</h2>
                        <h2 onClick={() => handleShowEvents()}>Events</h2>
                        <h2 onClick={() => handleShowContact()}>Contact</h2>
                    </div>
                </div>
                <div style={{width: '60vw'}}>
                </div>
            </div>
        </div>
    )
}