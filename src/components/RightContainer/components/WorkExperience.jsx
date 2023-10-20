import { workExperience } from "../../../../data/workExperience";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export default function WorkExperience() {
  function handleWorkExperieneData(data) {
    return Object.entries(data).map(([item, info], i) => {
      return (
        <li key={i} className="flex gap-3 group-hover:opacity-50
        group-hover:duration-100
        group-hover:hover:bg-slate-700/50
        group-hover:hover:opacity-100
        p-3
        rounded-md
        duration-100
        group/item">
          <span className="uppercase
          opacity-60
          w-36
          flex-none
          whitespace-nowrap
          text-sm">
            {info.date}
          </span>
          <div className="col-span-3">
            {
              info.link ? (
                <a href={info.link} target="_blank" className="
                text-lg text-slate-200 font-bold flex content-center gap-1 group/arrow
                group-hover/item:text-cyan-500">
                  <h4 className="duration-100 w-fit shrink
                  ">
                    {item}
                  </h4>
                  <span
                    className="
                    duration-100
                    group-hover/arrow:bottom-auto
                    group-hover/arrow:left-auto
                    group-hover/arrow:translate-x-1
                    group-hover/arrow:-translate-y-1
                    flex
                    justify-start
                    self-end
                    pb-1.5"
                  >
                    <FiArrowUpRight size={14}/>
                  </span>
                
                </a>
              ) :
              (
                <h4 className="text-lg text-slate-200 font-bold flex content-center gap-1 group/arrow
                group-hover/item:text-cyan-500 duration-100
                ">{item}</h4>
              )
            }
            <h5 className="text-md font-bold mt-1">{info.role}</h5>
            <p className="text-sm mt-2">
              <pre className="whitespace-pre-wrap font-poppins text-sm">
                {info.info}
              </pre>
              
            </p>
          </div>
        </li>
      );
    });
  }

  return (
    <section>
      <h3 className="text-xl text-slate-200">Experience</h3>
      <ul className="p-3 flex flex-col-reverse gap-2 group">{handleWorkExperieneData(workExperience)}</ul>
      <a href="./media/resume.pdf" target="_blank" className="flex flex-col w-fit group">
        <span className="text-slate-200 group-hover:text-cyan-500 flex gap-1">
          <span className="duration-100">View Resume</span>
          <span
                    className="
                    duration-100
                    group-hover:bottom-auto
                    group-hover:left-auto
                    group-hover:translate-x-2
                    flex
                    justify-start
                    self-end
                    pb-1.5"
                  >
                    <FiArrowRight size={14}/>
                  </span>
        </span>
        <span className="bg-cyan-500 h-px invisible group-hover:visible duration-100 opacity-0 group-hover:opacity-100"/>
        
      </a>
    </section>
  );
}
