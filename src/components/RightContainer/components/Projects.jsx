import { projects } from "../../../../data/projects";

export default function Projects() {
  function handleTech(data) {
    return data.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  }

  function handleList(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <li
          key={i}
          className="flex gap-3
                    duration-500
                    group-hover:opacity-50
                    group-hover:hover:opacity-100
                    group-hover:hover:bg-slate-700/50
                    p-3
                    rounded-md"
        >
          <img src={info.preview} alt="test" />
          <div className="flex flex-col gap-3">
            <h4 className="text-lg text-slate-200">{item}</h4>
            <p>
              <pre className="whitespace-pre-wrap font-poppins">{info.info}</pre>
            </p>

            <ul className="text-xs">Technologies used :{handleTech(info.tech)}</ul>
            <div className="flex flex-col text-xs">
              {info.sourceCode && (
                <a className="w-fit hover:text-cyan-500" href={info.sourceCode}>
                  Source Code
                </a>
              )}
              {info.appLink && (
                <a className="w-fit hover:text-cyan-500 duration-500" href={info.appLink}>
                  Link to app
                </a>
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
