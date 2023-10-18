import {languages, frontend, backend, testing, others} from '../../../../data/skills';
import { RiJavascriptLine } from "react-icons/ri";

export function Skills() {

    function handleIcon(name) {
        const iconName = {
            JavaScript: <RiJavascriptLine
            size={20}
            style={{alignSelf:"center"}}/>
        }
        return iconName[name]
    }

    function handleData(data) {
        return Object.entries(data).map(([item, info], i) => {
            return (
                <a href={info.link} target='_blank' key={i}>
                    <li className='flex gap-1'>
                        {handleIcon(item)}
                        <span>{item}</span>
                    </li>
                </a>
            )
        })
    }

    function handleText(data) {
        return Object.entries(data).map(([item,info],i) => {
            return (
                <li key={i}>
                    <span>{item}</span>
                    <p>
                        {info.description}
                        <a href={info.link}>More...</a>
                    </p>
                </li>
            )
        })
    }

    return (
        <section id='skills' className="scroll-mt-24">
            <h3>Technical Skills</h3>
            <div className='flex gap-4'>
                <h4>Languages:</h4>
                <ul>
                    {
                        handleData(languages)
                    }
                </ul>
            </div>
            <div className='flex'>
                Front-End:
                <ul>
                    {
                        handleData(frontend)
                    }
                </ul>
            </div>
            <div className='flex'>
                <h4>Backend:</h4>
                <ul>
                    {
                        handleData(backend)
                    }
                </ul>
            </div>
            <div className='flex'>
                <h4>Testing:</h4>
                <ul>
                    {
                        handleData(testing)
                    }
                </ul>
            </div>
            <div className='flex'>
                <h4>Others:</h4>
                <ul>
                    {
                        handleText(others)
                    }
                </ul>
            </div>
        </section>
    )
}