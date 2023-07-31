import { Col, Container, Modal, Row } from "react-bootstrap"
import { EventCardModal } from "./Cards/EventCardModal"
import { Key } from "react"

export const EventsModal = (Props: any) => {
    return (
        <Modal show={Props.show} onHide={Props.onHide} style={{maxWidth: '100vw'}}>
            <Modal.Header className="modalHeader" closeButton>
                Events
            </Modal.Header>
            <Modal.Body className="modalBody">
                <Container>
                    <Row style={{fontFamily: 'none !important'}} className="d-flex d-row">
                        {Props.events ? Props.events.map((items: { _id: Key | null | undefined })  => (
                            <Col key={items._id} className="d-flex justify-content-center"><EventCardModal {...items} /></Col>
                        )) : <>ERROR</>}
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}