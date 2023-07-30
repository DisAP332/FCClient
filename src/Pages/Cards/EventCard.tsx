import { Button, Col, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const EventCard = (Props) => {
    return(
        <Card style={{width: '30vw', height: '30vh'}} className='cardHelper mt-5'>
            <Card.Header>
                <Row>
                    <Col className='d-flex justify-content-start sexyFont align-items-center'>
                        <h1 style={{ fontSize: '1.6vw' }}>
                            {Props.data.Name}
                        </h1>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <h3 style={{ fontSize: '1.6vw'}}>
                            {(Props.data.Date).slice(0, 10)}
                        </h3>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{fontSize: '1.3vw'}}>{Props.data.Description}</Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <h3 style={{ fontSize: '1vw'}}>
                            Doors Open At: {Props.data.TimeDoorsOpen}PM
                        </h3>
                    </Col>
                    <Col>
                        <h3 style={{ fontSize: '1vw'}}>                            
                            Cost At Door: {Props.data.Cost}$
                        </h3>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}