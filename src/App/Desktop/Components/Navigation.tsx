import FCLogo from '../../Global/Imgs/FrenchConnectionLogo.png'
import FBSVG from '../../Global/SVGS/facebook.svg'

export const Navigation = (Props) => {

    return(

    <div style={{position: 'fixed'}}>

        <div className="navigationBarDesktop navFadeDown">
            <div />
            <div><h1 onClick={() => Props.scroll(Props.sections.aboutUsSection)}>About Us</h1></div>
            <div><h1 onClick={() => Props.scroll(Props.sections.amenitiesSection)}>Amenities</h1></div>
            <div onClick={() => Props.scroll(Props.sections.home)}>
                    <img src={FCLogo} alt='FCLogo' className="FCLogoDesktop"/>
            </div>
            <div><h1 onClick={() => Props.scroll(Props.sections.contactSection)}>Contact</h1></div>
            <div><h1 onClick={() => Props.scroll(Props.sections.eventsSection)}>Events</h1></div>
            <div />
        </div>

    </div>
    )
}