import Header from "./components/Header";
import Nav from "./components/Nav";
import Socials from "./components/Socials";

export default function LeftContainer() {
    return (
        <section className="lg:w-2/5 py-24 flex flex-col justify-between lg:sticky top-0 max-h-screen">
            <Header/>
            <Nav/>
            <Socials/>
        </section>        
    )
}