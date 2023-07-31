import { Col, Container, Row } from "react-bootstrap"

export const Home = () => {
    return (
        <>
            <Container style={{width: '80vw', maxWidth: 'none'}} className="d-flex">
                <Row style={{marginTop: '20px', width: '80vw', fontSize: '4vw'}} className="transparentBackground d-flex space-between">
                        <Col>
                            <Container className="contStyling homeImg drinksImg"
                            />
                            <h2 className="sexyFont">Tasty Drinks</h2>
                        </Col>
                        <Col>
                            <Container className="contStyling homeImg shoesImg"
                            />
                            <h2 className="sexyFont">Fun Modern Dance Floor</h2>
                        </Col>
                        <Col>
                            <Container className="contStyling homeImg heartImg"
                            />
                            <h2 className="sexyFont">Easy, Sexy, Fun</h2>
                        </Col>
                    </Row>
            </Container>

            {/* <Container style={{margin: '0px', maxWidth: 'none'}} className="d-none d-lg-block">
                <Container style={{margin: '0px', maxWidth: 'none'}}>
                    <Row style={{marginTop: '20px'}} className="contStyling">
                        <Col>
                            <Container className="contStyling homeImg drinksImg"
                            />
                            <h2 className="sexyFont">Tasty Drinks</h2>
                        </Col>
                        <Col>
                            <Container className="contStyling homeImg shoesImg"
                            />
                            <h2 className="sexyFont">Fun Modern Dance Floor</h2>
                        </Col>
                        <Col>
                            <Container className="contStyling homeImg heartImg"
                            />
                            <h2 className="sexyFont">Easy, Sexy, Fun</h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div style={{height:'200px'}}>
                <img src={mdCoverImg} alt='medium cover image' className="mdHomeImg d-lg-none"/>
                <div>
                    upcoming events
                </div>
            </div> */}
        </>
    )
}