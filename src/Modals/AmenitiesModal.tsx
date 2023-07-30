import { Modal } from "react-bootstrap"

export const AmenitiesModal = (Props) => {
    return (
        <Modal show={Props.show} onHide={Props.onHide} style={{maxWidth: '100vw'}}>
            <Modal.Header className="modalHeader" closeButton>
                Amenities / Club Features
            </Modal.Header>
            <Modal.Body className="modalBody">
                Spacious Seating Areas <br />
                ********** <br />
                Full Cash Bar <br />
                ********** <br />
                High-Energy Live DJ <br />
                ********** <br />
                Cage with Swing <br />
                ********** <br />
                Full Cash Bar <br />
                ********** <br />
                Semi-Private Couch/Lounge Area <br />
                ********** <br />
            </Modal.Body>
        </Modal>
    )
}