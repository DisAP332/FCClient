import { Col, Container, Row } from "react-bootstrap"
import apis from "../Api"
import { EventCard } from "./Cards/EventCard"

export const Events = (Props) => {
    return(
        <>
            <Container className='d-flex justify-content-center flex-column ' style={{maxWidth: 'none'}}>
                <h1 className="sexyFont transparentBackground" style={{fontSize: '100px'}}>EVENTS</h1>
                <Row>
                    {Props.events ? Props.events.map(items => (
                        <Col key={items._id} className="d-flex justify-content-center"><EventCard {...items} /></Col>
                    )) : <></>}
                </Row>
            </Container>
        </>
    )
}