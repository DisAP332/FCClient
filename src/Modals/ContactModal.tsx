import { Col, Container, Modal, Row } from "react-bootstrap"
import { EventCardModal } from "./Cards/EventCardModal"

export const ContactModal = (Props) => {
    console.log(Props.events)

    return (
        <Modal show={Props.show} onHide={Props.onHide} style={{maxWidth: '100vw'}}>
            <Modal.Header className="modalHeader" closeButton>
                Contact Us
            </Modal.Header>
            <Modal.Body className="modalBody" style={{fontFamily: 'none'}}>
                <h1>Phone</h1>
                <h2>(859)225-0011</h2>
                <h1>*********</h1>
                <h1>Address</h1>
                <h2>
                    942 Winchester Road <br />
                    Lexington, KY 40505
                </h2>
                <h1>*********</h1>
                <h1>E-mail</h1>
                <h2>french.connections18@gmail.com <br />
                Please e-mail us with any Questions/Suggestions/Comments!
                </h2>
            </Modal.Body>
        </Modal>
    )
}