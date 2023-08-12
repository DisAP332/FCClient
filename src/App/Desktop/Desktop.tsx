import { useRef } from "react"
import { Navigation } from "./Components/Navigation"
import { Body } from "./Components/Body"
import { Footer } from "./Components/Footer"

export const Desktop = () => {

    const aboutUsSection = useRef(null)
    const amenitiesSection = useRef(null)
    const contactSection = useRef(null)
    const eventsSection = useRef(null)
    const home = useRef(null)

    const sections = {aboutUsSection, amenitiesSection, contactSection, eventsSection, home}

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Navigation 
                scroll={scrollToSection}
                sections={sections}/>
            <Body 
                sections={sections}
            />
            <Footer />
        </>
    )
}