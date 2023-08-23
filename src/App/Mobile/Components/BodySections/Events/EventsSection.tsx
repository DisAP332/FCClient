// import apis from "../../../../Global/DB/index";
import { EventCard } from "./EventCard";
import events from '../../../../Global/DB/events.json'


// let events: any;
// let Data: any

// const fetchEventsData = async () => {
//     Data = await apis.getAllEvents()
//     const DataFormatted = Data.data.data
//     events = DataFormatted
//     console.log('data fetched')
//   }
  
  
//   try {
//     await fetchEventsData()
//     console.log(events)
//   } catch(err){
//     console.log(err)
//   }

export const EventsSection = (Props) => {

    return (
        <>
            <div className="eventsSection flexCentered" ref={Props.eventsSection}>
                <h1> EVENTS </h1>
                <>
                    <div>
                        <div>
                            {events ? events.map(items => (
                                <div key={items._id} ><EventCard {...items} /></div>
                            )) : <></>}
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}