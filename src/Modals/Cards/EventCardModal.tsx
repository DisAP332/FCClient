import { Button, Col, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const EventCardModal = (Props) => {
    return(
        <Card className='cardHelper mt-5' style={{fontFamily: 'none'}}>
            <Card.Header>
                <Row>
                    <Col className='d-flex justify-content-start'>
                        <h1 style={{ fontSize: '30px'}}>
                            {Props.data.Name}
                        </h1>
                    </Col>
                </Row>
                <h3 style={{ fontSize: '20px', fontFamily: 'none'}}>
                    {(Props.data.Date).slice(0, 10)}
                </h3>
            </Card.Header>
            <Card.Body style={{fontSize: '20px'}}>{Props.data.Description}</Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <h3 style={{ fontSize: '15px'}}>
                            Doors Open At: {Props.data.TimeDoorsOpen}PM
                        </h3>
                    </Col>
                    <Col>
                        <h3 style={{ fontSize: '15px'}}>                            
                            Cost At Door: {Props.data.Cost}$
                        </h3>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}