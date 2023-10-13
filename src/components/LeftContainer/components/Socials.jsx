import { socials } from "../../../../data/socials";

export default function Socials() {
    return (
        Object.entries(socials).map(([social, info], i) => {
            return (
                <div key={i} className="w-8 h-8">
                    <a href={info.link}>
                        <img src={info.logo} alt={`${social}-logo`} />
                    </a>
                </div>
            )
        })
    )
}