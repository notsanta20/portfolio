import type { stack } from "../../types/types";
import TextTag from "./TextTag";

function Stack({ techStack }: { techStack: stack }) {
  return (
    <>
      <div className="flex flex-col gap-4 mt-[5px]">
        <h3>{techStack.title}</h3>
        <div className="flex flex-wrap gap-2 text-(--gray-dark)">
          {techStack.stack.map((s) => (
            <TextTag text={String(s)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Stack;
