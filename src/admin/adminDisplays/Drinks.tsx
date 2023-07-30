import React from 'react'
import DrinkCard from './cards/DrinkCard'
import { Col } from 'react-bootstrap'

let Data

export const Drinks = (Props) => {

    if (Props.drinks !== undefined){
        try {
            Data = React.useMemo(() => Props.drinks.data.data, [])
        } catch (err) {
            console.error(err)
        }
    } else {
        console.log('drinks is empty')
    }

    console.log(Data)


    return (
        <>
        {
            Data 
            ?
            <div>
            {Data.map(items => (
                <Col key={items._id}><DrinkCard {...items} /></Col>
            ))}
            </div>
            :
            <>ERROR</>
        }
        </>
    )
}