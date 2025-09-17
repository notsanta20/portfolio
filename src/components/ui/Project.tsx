import type { project } from "../../types/types";
import Arrow from "./Arrow";
import TextTag from "./TextTag";

function Project({ project }: { project: project }) {
  return (
    <div className="flex flex-col items-start gap-[10px] w-full">
      <div className="flex gap-2 items-center hover:text-(--gray-light) hover:cursor-pointer project-link">
        <a
          href={project.link}
          className="underline underline-offset-5"
          target="blank"
        >
          {project.name}
        </a>
        <Arrow />
      </div>
      <p className="text-(--gray-light)">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <TextTag text={t} />
        ))}
      </div>
    </div>
  );
}

export default Project;
