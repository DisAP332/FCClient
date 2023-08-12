import { HamToXBtn } from "../../Global/HamburgerToXButton"
import { useState } from "react"
import FCLogo from '../../Global/Imgs/FrenchConnectionLogo.png'
import FBSVG from '../../Global/SVGS/facebook.svg'

export const Navigation = (Props) => {

    const [showNav, setShowNav] = useState(false)

    const handleClick = () => {
        setShowNav(!showNav)
        console.log(showNav)
    }

    return (
        <div style={{position: 'fixed'}}>
            <div className={showNav ? 'transparentNav' : 'hide'}>
                <h2 onClick={() => Props.scroll(Props.sections.aboutUsSection)}>About Us</h2>
                <h2 onClick={() => Props.scroll(Props.sections.amenitiesSection)}>Amenities</h2>
                <h2 onClick={() => Props.scroll(Props.sections.contactSection)}>Contact Us</h2>
                <div className="eventsBtn" onClick={() => Props.scroll(Props.sections.eventsSection)}><h3>Events</h3></div>
            </div>

            <div className="navigationBar navFadeDown">
                <div onClick={() => handleClick()}>
                    <HamToXBtn />
                </div>
                <div>
                    <img src={FCLogo} alt='FCLogo' className="FCLogo"/>
                </div>
                <div className="flexCentered">
                    <a href="https://www.facebook.com/groups/1549001371833492" target="_blank">
                    <img src={FBSVG} alt='FB Logo' style={{width: '15vw'}}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
