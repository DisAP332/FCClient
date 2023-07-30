import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <>
           <Container className="footer transparentBackground d-none d-md-inline" fluid>
              <Row>
                <Col className="d-flex DevName">
                  <a className='d-flex' href={'https://linkedin.com/in/jordan-bell-135205251/'} target="_blank">
                    <h1 className="Jordan1">
                      Jordan
                    </h1>
                    <h1 className="Jordan2">
                      Bell
                    </h1>
                    <h1 className="Jordan1">Web Dev</h1>
                  </a>
                </Col>
                <Col>advertisment</Col>
                <Col>links</Col>
              </Row>
            </Container>         
        </>
    )
}