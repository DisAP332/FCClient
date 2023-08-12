import { Body } from "./Components/Body"
import { Navigation } from "./Components/Navigation"
import { Footer } from "./Components/Footer"

import { useRef } from 'react'


export const Mobile = () => {
    const aboutUsSection = useRef(null)
    const amenitiesSection = useRef(null)
    const contactSection = useRef(null)
    const eventsSection = useRef(null)

    const sections = {aboutUsSection, amenitiesSection, contactSection, eventsSection}

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
                sections={sections}
                />
            <Body 
                sections={sections}
            />
            <Footer />
        </>
    )
}