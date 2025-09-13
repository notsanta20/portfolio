import type { stack } from "../../types/types";
import TextTag from "./TextTag";

function Stack({ stack }: { stack: stack }) {
  return (
    <>
      <div className="flex flex-col gap-4 mt-[5px]">
        <h3>{stack.title}</h3>
        <div className="flex flex-wrap gap-2 text-(--gray-dark)">
          {stack.stack.map((s) => (
            <TextTag text={s} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Stack;
