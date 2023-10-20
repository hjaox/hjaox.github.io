import { projects } from "../../../../data/projects";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  function handleTech(data) {
    return data.map((item, i) => {
      return (
        <li key={i} className="bg-cyan-500/50 w-fit h-fit p-1 px-4 rounded-2xl text-cyan-300">
          {item}
        </li>
      );
    });
  }

  function handleList(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <li
          key={i}
          className="grid
                    grid-cols-3
                    gap-3
                    duration-100
                    group-hover:opacity-50
                    group-hover:hover:opacity-100
                    group-hover:hover:bg-slate-700/50
                    p-3
                    rounded-md
                    group/item"
        >
          <img src={info.preview} alt={`${item} preview`}
            className="border-2
            border-cyan-500/20
            rounded-md
            w-full
            h-28
            object-fill"/>
          <div className="flex flex-col gap-3 col-span-2">
            <h4 className="text-lg text-slate-200 font-bold group-hover/item:text-cyan-500 duration-100">{item}</h4>
            <p>
              <pre className="whitespace-pre-wrap font-poppins text-sm">
                {info.info}
              </pre>
            </p>

            <ul className="text-xs flex flex-wrap gap-1">{handleTech(info.tech)}</ul>
            <div className="flex flex-col text-xs">
              {info.sourceCode && (
                <div className="flex content-center group/arrow gap-1">
                  <a
                    className="w-fit group-hover/item:text-cyan-500 duration-700 mt-auto"
                    href={info.sourceCode}
                  >
                    Source Code
                  </a>
                  <span
                    className="
                    h-fit
                    w-fit
                    duration-100
                    group-hover/arrow:bottom-auto
                    group-hover/arrow:left-auto
                    group-hover/item:text-cyan-500
                    group-hover/arrow:translate-x-1
                    group-hover/arrow:-translate-y-1"
                  >
                    <FiArrowUpRight size={14} />
                  </span>
                </div>
              )}
              {info.appLink && (
                <div className="flex content-center group/arrow gap-1">
                  <a className="w-fit group-hover/item:text-cyan-500 duration-700" href={info.appLink}>
                    Link to app
                  </a>
                  <span
                    className="
                    h-fit
                    w-fit
                    duration-100
                    group-hover/arrow:bottom-auto
                    group-hover/item:text-cyan-500
                    group-hover/arrow:left-auto
                    group-hover/arrow:translate-x-1
                    group-hover/arrow:-translate-y-1"
                  >
                    <FiArrowUpRight size={14} />
                  </span>
                </div>
              )}
            </div>
          </div>
        </li>
      );
    });
  }

  return (
    <section id="projects" className="scroll-mt-24 flex flex-col gap-2">
      <h3 className="text-xl text-slate-200">Projects</h3>
      <ul className="flex flex-col-reverse gap-1 group">{handleList(projects)}</ul>
    </section>
  );
}
