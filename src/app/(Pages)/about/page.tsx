import AboutComponent from "@/app/Components/AboutComponent"
import AboutHero from "@/app/Components/AboutHero"
import ServiceAbout from "@/app/Components/ServiceAbout"
import { aboutOffer, serviceCard } from "@/app/data/data"

function About() {
      return (
            <div>
                  <AboutHero
                        title="Our team cares about your full relax"
                        description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
                              and expound the actual teachings of the great explorer of the truth,
                              the master-builder of human happiness."
                        button="View our Tour Packages">
                  </AboutHero>
                  <main>
                        <div className="my-30">
                              <AboutComponent aboutContent={aboutOffer}></AboutComponent>
                        </div>
                        <div>
                              <ServiceAbout content={serviceCard}></ServiceAbout>
                        </div>
                  </main>
            </div>
      )
}

export default About
