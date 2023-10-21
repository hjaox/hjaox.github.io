import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import { Skills } from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

export default function RightContainer() {
    return (
        <section id="right" className="lg:w-3/5 py-24 flex flex-col gap-24 scroll-smooth">
            <AboutMe/>
            <Skills/>
            <Projects/>
            <WorkExperience/>
            <Footer/>
        </section>
    )
}