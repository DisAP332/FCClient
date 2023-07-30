import { Col, Container, Row } from "react-bootstrap"

export const Contact = () => {
    return(
        <>
            <Container style={{maxWidth: 'none'}} className="mt-3">
                <Row className="contactHelper">
                    <Col>
                        <h1>Phone</h1>
                        <h2>(859)225-0011</h2>                    
                    </Col>
                    <Col>
                        <h1>Address</h1>
                        <h2>
                            942 Winchester Road <br />
                            Lexington, KY 40505
                        </h2>
                    </Col>
                    <Col>
                        <h1>E-mail</h1>
                        <h2>french.connections18@gmail.com <br />
                        Please e-mail us with any Questions/Suggestions/Comments!
                        </h2>
                    </Col>
                </Row>
                <Row className="contactHelper d-flex justify-content-center">
                    <Col>
                        <h1>Swing Life Style</h1>
                        <h2>Clickk Here to log into SLS to view our profile!</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}