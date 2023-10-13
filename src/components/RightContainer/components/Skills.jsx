import {languages, frontend, backend, testing, others} from '../../../../data/skills'

export function Skills() {

    function handleData(array) {
        return Object.entries(array).map(([item, info], i) => {
            return (
                <a href={info.link} target='_blank' key={i}>
                    <li className='flex'>
                        <img src={info.logo} alt={`${item}-logo`} className='w-8 h-8 bg-transparent'/>
                        {item}
                    </li>
                </a>
            )
        })
    }

    function handleText(array) {

    }

    return (
        <div>
            <span className='flex'>
                Languages:
                <ul>
                    {
                        handleData(languages)
                    }
                </ul>
            </span>
            <span className='flex'>
                Front-End:
                <ul>
                    {
                        handleData(frontend)
                    }
                </ul>
            </span>
            <span className='flex'>
                Backend:
                <ul>
                    {
                        handleData(backend)
                    }
                </ul>
            </span>
            <span className='flex'>
                Testing:
                <ul>
                    {
                        handleData(testing)
                    }
                </ul>
            </span>
            <span className='flex'>
                Others:
                <ul>
                    {
                        handleText(others)
                    }
                </ul>
            </span>
        </div>
    )
}