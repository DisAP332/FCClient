import { Container, Row } from "react-bootstrap"

export const Amenities = () => {
    return(
        <>
            <Container style={{width: '80vw', maxWidth: 'none'}} className="d-flex justify-content-center transparentBackground flex-column">
            <h1 style={{fontSize: '3vw'}} className="sexyFont">Amenities / Club Features</h1>
                <Row className="amenitiesHelper">
                    <h2>
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
                    </h2>
                </Row>
            </Container>
        </>
    )
}