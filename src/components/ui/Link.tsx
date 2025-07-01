import type { link } from "../../types/types";

function Link({ link }: { link: link }) {
  return (
    <a
      href={link.link}
      target="_blank"
      className="text-sm font-(family-name:--font-mono) underline underline-offset-5 hover:text-(--gray-light) hover:cursor-pointer"
    >
      {link.name}
    </a>
  );
}

export default Link;
