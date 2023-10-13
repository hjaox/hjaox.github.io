export default function Nav() {
    const navBar = ['ABOUT', 'PROJECTS', 'EXPERIENCE'];
    return (
        <ol>
            {
                navBar.map(item => {
                    return (
                        <li>
                            {item}
                        </li>
                    );
                })
            }
        </ol>
    )
}