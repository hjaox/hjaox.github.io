import { languages, frontend, backend, testing, others } from "../../../../data/skills";

export function Skills() {
  function handleData(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <a
          href={info.link}
          target="_blank"
          key={i}
          className="group-hover:text-slate-200
                group-hover:group-hover/item:text-slate-400
                group-hover:group-hover/item:opacity-50
                group-hover:group-hover/item:hover:text-cyan-500
                group-hover:group-hover/item:hover:opacity-100
                w-fit
                duration-300"
        >
          <li className="flex gap-1">
            <span>{info.logo}</span>
            <span className="text-sm">{item}</span>
          </li>
        </a>
      );
    });
  }

  function handleText(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <li
          key={i}
          className="group-hover:text-slate-200
                group-hover:group-hover/item:text-slate-400
                group-hover:group-hover/item:opacity-50
                group-hover:group-hover/item:hover:text-cyan-500
                group-hover:group-hover/item:hover:opacity-100
                w-fit
                duration-300
                group/info
                relative"
        >
          <a href={info.link} target="_blank">
            <span className="text-sm">{item}</span>
          </a>
          <p
            className="invisible
                    opacity-0
                    absolute
                    top-5
                    text-slate-300
                    duration-500
                    group-hover/info:visible
                    group-hover/info:opacity-100
                    group-hover/info:delay-500
                    group-hover/info:duration-500
                    hover:opacity-100
                    start-1/2
                    w-64
                    p-1
                    bg-slate-600
                    rounded-xl
                    z-10
                    text-sm"
          >
            {info.description}
          </p>
        </li>
      );
    });
  }

  return (
    <section id="skills" className="scroll-mt-24 flex flex-col gap-2">
      <h3 className="text-xl text-slate-200 font-bold lg:hidden">Technical Skills</h3>
      <div className="flex justify-between">
        <div>
          <section className="flex gap-4 group
          hover:bg-slate-700/50
          p-2
          rounded-md
          duration-500">
            <h4 className="hover:text-slate-200 duration-500">Languages:</h4>
            <ul className="group/item flex items-center">{handleData(languages)}</ul>
          </section>
          <section className="flex gap-6 group
          hover:bg-slate-700/50
          p-2
          rounded-md
          duration-500">
            <h4 className="mr-0.5 hover:text-slate-200 duration-500">Front-End:</h4>
            <ul className="group/item">{handleData(frontend)}</ul>
          </section>
        </div>
        <div className="flex justify-between flex-col">
          <section className="flex gap-4 group
          hover:bg-slate-700/50
          p-2
          rounded-md
          duration-500">
            <h4 className="hover:text-slate-200 duration-500">Backend:</h4>
            <ul className="group/item">{handleData(backend)}</ul>
          </section>
          <section className="flex gap-7 group
          hover:bg-slate-700/50
          p-2
          rounded-md
          duration-500">
            <h4 className="hover:text-slate-200 duration-500">Testing:</h4>
            <ul className="group/item flex flex-col">{handleData(testing)}</ul>
          </section>
        </div>
      </div>
      <section className="flex gap-12 group
      hover:bg-slate-700/50
      p-2
      rounded-md
      duration-500">
        <h4 className="hover:text-slate-200 duration-500 mr-1.5">Others:</h4>
        <ul className="group/item">{handleText(others)}</ul>
      </section>
    </section>
  );
}
