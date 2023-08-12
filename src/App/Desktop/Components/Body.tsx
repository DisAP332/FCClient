import { AboutUs } from "./BodySections/AboutUsSec"
import { AmenitiesHeader } from "./BodySections/AmenitiesHeader"
import { AmenitiesSection } from "./BodySections/AmenitiesSec"
import { ContactUsSection } from "./BodySections/ContactUsSec"
import { EventsSection } from "./BodySections/Events/Events"
import { LandingPage } from "./BodySections/LandingPage"

export const Body = (Props) => {
    return (
        <>
            <LandingPage home={Props.sections.home}/>
            <AmenitiesHeader />
            <AmenitiesSection amenitiesSection={Props.sections.amenitiesSection}/>
            <EventsSection eventsSection={Props.sections.eventsSection}/>
            <AboutUs aboutUsSection={Props.sections.aboutUsSection}/>
            <ContactUsSection contactSection={Props.sections.contactSection}/>
        </>
    )
}