import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import { Skills } from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

export default function RightContainer() {
    return (
        <section className="lg:w-1/2 py-24 flex flex-col gap-24">
            <AboutMe/>
            <Skills/>
            <Projects/>
            <WorkExperience/>
            <Footer/>
        </section>
    )
}