import { socials } from "../../../../data/socials";

export default function Socials() {
    return (
        <section>
            <div  className="flex gap-1">
                {
                    Object.entries(socials).map(([social, info], i) => {
                        return (
                            <a href={info.link} target="_blank" key={i} className="hover:text-cyan-500 duration-500">
                                {info.logo}
                            </a>
                        )
                    })
                }
            </div>
            <span className="text-xs hover:text-cyan-500 duration-500">
                hectorjana.o@gmail.com/07306 891589
            </span>
        </section>
    )
}