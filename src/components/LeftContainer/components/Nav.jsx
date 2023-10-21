import { useEffect } from "react";

export default function Nav() {
    const navBar = ['about', 'skills', 'projects', 'experience'];

    useEffect(() => {
        const aboutEle = document.getElementById('about');
        const skillsEle = document.getElementById('skills');
        const projectsEle = document.getElementById('projects');
        const experienceEle = document.getElementById('experience');

        const aboutNavBar = document.getElementById('nav-bar-about');
        const skillsNavBar = document.getElementById('nav-bar-skills');
        const projectsNavBar = document.getElementById('nav-bar-projects');
        const experienceNavBar = document.getElementById('nav-bar-experience');

        const aboutNavText = document.getElementById('nav-text-about');
        const skillsNavText = document.getElementById('nav-text-skills');
        const projectsNavText = document.getElementById('nav-text-projects');
        const experienceNavText = document.getElementById('nav-text-experience');

        scrollEvent(null);
        
        window.addEventListener("scroll", event => {
            const aboutEleTop = aboutEle.getBoundingClientRect().top;
            const skillsEleTop = skillsEle.getBoundingClientRect().top;
            const projectsEleTop = projectsEle.getBoundingClientRect().top;
            const experienceEleTop = experienceEle.getBoundingClientRect().top;
            scrollEvent(aboutEleTop, skillsEleTop, projectsEleTop, experienceEleTop)
        })

        function scrollEvent(aboutEleTop, skillsEleTop, projectsEleTop, experienceEleTop) {

            skillsEleTop > 96 && aboutEleTop <= 96 || aboutEleTop === null
            ? navActive(aboutNavBar, aboutNavText)
            : navInactive(aboutNavBar, aboutNavText)

            projectsEleTop > 96 && skillsEleTop <= 96
            ? navActive(skillsNavBar, skillsNavText)
            : navInactive(skillsNavBar, skillsNavText)

            experienceEleTop > 96 && projectsEleTop <= 96
            ? navActive(projectsNavBar, projectsNavText)
            : navInactive(projectsNavBar, projectsNavText)

            experienceEleTop <= 96
            ? navActive(experienceNavBar, experienceNavText)
            : navInactive(experienceNavBar, experienceNavText)

            function navActive(navBar, navText) {
                navBar.classList.add('w-16'),
                navBar.classList.add('bg-slate-200'),
                navBar.classList.remove('w-8'),
                navBar.classList.remove('bg-slate-600'),
                navText.classList.add('text-slate-200'),
                navText.classList.remove('text-slate-500')
                
            }

            function navInactive(navBar, navText) {
                navBar.classList.add('w-8'),
                navBar.classList.add('bg-slate-600'),
                navBar.classList.remove('w-16'),
                navBar.classList.remove('bg-slate-200'),
                navText.classList.add('text-slate-500'),
                navText.classList.remove('text-slate-200')
            }         
        }
        
    },[])
    return (
        <section>
            <ol className="hidden lg:flex flex-col gap-3 pb-80 mt-10">
                {
                    navBar.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={`#${item}`} className="group flex items-center w-fit">
                                    <span id={`nav-bar-${item}`} className="bg-slate-600 h-px my-auto mr-2 w-8 group-hover:bg-slate-200 
                                    transition-all
                                    group-hover:w-16
                                    group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span id={`nav-text-${item}`} className="text-sm font-bold tracking-widest uppercase text-slate-500 group-hover:text-slate-200
                                    group-focus:text-slate-200">{item}</span>
                                </a>
                            </li>
                        );
                    })
                }
            </ol>
        </section>
    )
}