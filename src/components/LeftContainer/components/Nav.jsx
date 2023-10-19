export default function Nav() {
    const navBar = ['about', 'skills', 'projects', 'experience'];
    return (
        <section>
            <ol className="flex flex-col gap-3 pb-80">
                {
                    navBar.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={`#${item}`} className="group flex items-center w-fit">
                                    <span className="bg-slate-600 h-px my-auto mr-2 w-8 group-hover:bg-slate-200 
                                    transition-all
                                    group-hover:w-16
                                    group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="text-sm font-bold tracking-widest uppercase text-slate-500 group-hover:text-slate-200
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