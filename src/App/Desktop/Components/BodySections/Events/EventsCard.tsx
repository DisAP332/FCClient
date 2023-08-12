export const EventCard = (Props: any) => {
    console.log(Props.RoL)
    return(
        <div className='eventsCard'>
            <div />
            <div>
                <h2>
                    {Props.Name}
                </h2>
                <h2>
                    {(Props.Date).slice(0, 10)}
                </h2>
            </div>
            <div>
                <h3>
                {Props.Description}
                </h3>
            </div>
            <div />
        </div>
    )
}