import { Container, Row } from "react-bootstrap"

export const About = () => {
    return(
        <>
            <Container style={{width: '80vw', maxWidth: 'none'}} className="d-flex">
                <Row style={{marginTop: '20px', width: '80vw'}} className="transparentBackground d-flex space-between">
                <h2 style={{fontSize: '2vw'}}>
                We here at French Connections are a fun local bar / club experince. Catering to the adventerous
                adult like you. Our club offers a supurb bar and the excitement that comes with events like minded couples
                in the lifestyle enjoy! Come visit us each and every Saturday night and on Friday nights for more... adventerous fun.
                This is a <strong>OFF - PREMISE </strong> club. You <strong> MUST </strong> be <strong> 21 years old </strong> to end and must present ID at the door!
                Be sure to check the Events page to browse the <strong> exciting theme nights </strong> that cater to all types of fun-seekers!
                </h2>
                </Row>
            </Container>
        </>
    )
}