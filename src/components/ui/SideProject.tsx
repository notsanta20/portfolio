import type { project } from "../../types/types";

function SideProject({ sideProject }: { sideProject: project }) {
  return (
    <>
      <p className="text-(--gray-light)">
        <a
          href={sideProject.link}
          className="underline text-white hover:text-(--gray-light) hover:cursor-pointer"
          target="blank"
        >
          {sideProject.name}
        </a>
        {" " + sideProject.description}
      </p>
    </>
  );
}

export default SideProject;
