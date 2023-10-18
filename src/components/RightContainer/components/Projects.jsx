import { projects } from "../../../../data/projects";

export default function Projects() {

    function handleTech(data) {
        return data.map((item, i) => {
            return (
                <li key={i}>
                    {item}
                </li>
            )
        })
    }

    return (
        <section>
            <h3>Projects</h3>
            <ul>
                {
                    Object.entries(projects).map(([item, info], i) => {
                        return (
                            <li key={i}>
                                <img src="" alt="" />
                                <div>
                                    <h4>{item}</h4>
                                    <p>{info.info}</p>
                                    <ul>
                                        Technologies used :
                                        {handleTech(info.tech)}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}