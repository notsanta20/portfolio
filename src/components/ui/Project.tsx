import type { project } from "../../types/types";
import Arrow from "./Arrow";

function Project({ project }: { project: project }) {
  return (
    <div className="flex flex-col gap-[20px] w-[150px]">
      <div className="flex gap-2 hover:text-(--gray-light) hover:cursor-pointer">
        <a href={project.link} className="underline underline-offset-5">
          {project.name}
        </a>
        <Arrow />
      </div>
      <p className="text-(--gray-dark)">{project.description}</p>
    </div>
  );
}

export default Project;
