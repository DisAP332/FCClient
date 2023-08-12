import { AboutUs } from "./BodySections/AboutUs/AboutUs"
import { BarSection } from "./BodySections/Bar/BarSection"
import { BarSectionHeader } from "./BodySections/Bar/BarSectionHeader"
import { ClubSection } from "./BodySections/Club/ClubSection"
import { ClubSectionHeader } from "./BodySections/Club/ClubSectionHeader"
import { ContactUs } from "./BodySections/Contact/ContactUs"
import { EventsSection } from "./BodySections/Events/EventsSection"
import { LandingSection } from "./BodySections/LandingSection"

export const Body = (Props) => {
    return (
        <>
            <LandingSection amenitiesSection={Props.sections.amenitiesSection}/>
                <div className="heartImg">
                </div>
            <BarSectionHeader />
            <BarSection />
            <ClubSectionHeader />
            <ClubSection />
            <EventsSection eventsSection={Props.sections.eventsSection}/>
            <ContactUs contactSection={Props.sections.contactSection} />
            <AboutUs aboutUsSection={Props.sections.aboutUsSection}/>
        </>
    )
}