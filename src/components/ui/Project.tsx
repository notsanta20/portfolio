import type { project } from "../../types/types";
import Arrow from "./Arrow";

function Project({ project }: { project: project }) {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="flex gap-2 hover:text-(--gray-light) hover:cursor-pointer">
        <a
          href={project.link}
          className="underline underline-offset-5"
          target="blank"
        >
          {project.name}
        </a>
        <Arrow />
      </div>
      <p className="text-(--gray-dark)">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <div className="text-sm text-(--dark-main) bg-(--gray-dark) rounded-2xl py-1 px-2">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
