import type { stack } from "../../types/types";

function Stack({ stack }: { stack: stack }) {
  return (
    <>
      <div className="flex flex-col gap-2 mt-[5px]">
        <h3>{stack.title}</h3>
        <div className="flex flex-wrap gap-2 text-(--gray-dark)">
          {stack.stack.map((s) => (
            <p>{s}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stack;
