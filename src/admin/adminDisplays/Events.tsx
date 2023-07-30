
import React from 'react'
import EventCard from './cards/EventCard'
import { Col } from 'react-bootstrap';

let Data;

export const Events = (Props) => {

    if (Props.events !== undefined){
        Data = React.useMemo(() => Props.events.data.data, [])
    } else {
        console.error('drinks is empty')
    }

    return (
        <>
            <div>
                { Data ? Data.map(items => (
                    <Col key={items._id}><EventCard {...items} /></Col>
                )) : <>Empty</>}
            </div>
        </>
    )
}