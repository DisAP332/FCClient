import { Modal } from "react-bootstrap"

export const AboutUsModal = (Props) => {
    return (
        <Modal show={Props.show} onHide={Props.onHide} style={{maxWidth: '100vw'}}>
            <Modal.Header className="modalHeader" closeButton>
                About the Club
            </Modal.Header>
            <Modal.Body className="modalBody">
                We here at French Connections are a fun local bar / club experince. Catering to the adventerous
                adult like you. Our club offers a supurb bar and the excitement that comes with events like minded couples
                in the lifestyle enjoy! Come visit us each and every Saturday night and on Friday nights for more... adventerous fun.
                <br/>
                This is a <strong>OFF - PREMISE </strong> club. You <strong> MUST </strong> be <strong> 21 years old </strong> to end and must present ID at the door!
                <br/>
                Be sure to check the Events page to browse the <strong> exciting theme nights </strong> that cater to all types of fun-seekers!
            </Modal.Body>
        </Modal>
    )
}