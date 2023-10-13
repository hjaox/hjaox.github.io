export default function Nav() {
    const navBar = ['ABOUT', 'PROJECTS', 'EXPERIENCE'];
    return (
        <ol>
            {
                navBar.map((item, i) => {
                    return (
                        <li key={i}>
                            {item}
                        </li>
                    );
                })
            }
        </ol>
    )
}