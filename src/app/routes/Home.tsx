import Project from "../../components/ui/Project";
import Link from "../../components/ui/Link";
import type { project, link } from "../../types/types";

function Home() {
  const allLinks: Array<link> = [
    {
      name: "email",
      link: "",
    },
    {
      name: "linkedin",
      link: "",
    },
    {
      name: "github",
      link: "",
    },
  ];
  const allProjects: Array<project> = [
    {
      name: "Local Bank",
      link: "",
      description: "Terminal based bank app built with java.",
    },
    {
      name: "Yabble",
      link: "",
      description:
        "Social media app built with react, node.js, PostgreSQL, socket.io & jwt auth.",
    },
    {
      name: "Chatterbox",
      link: "",
      description:
        "Messaging app built with react, node.js, PostgreSQL & jwt auth.",
    },
  ];

  return (
    <div className="flex flex-col gap-15 h-dvh md:h-full w-full mt-[50px] md:mt-[100px] text-(--light-main)">
      <section className="md:w-[600px] md:self-center px-5 min-w-0 flex-auto flex flex-col gap-15">
        <header>
          <h1 className="font-(family-name:--font-mono) text-lg">Santhosh</h1>
          <section className="mt-[40px] flex flex-col gap-[40px]">
            <h2>
              <span className="font-(family-name:--font-serif) italic">
                3D artist
              </span>{" "}
              turned software developer with a passion for building things and
              exploring new technologies.My journey from visual design to code
              has been driven by curiosity and a deep love for problem-solving.
            </h2>
            <h2>
              If I'm not coding, I'm probably tinkering my homelab, gaming, or
              sketching out ideas for my next side project or startup.
            </h2>
          </section>
        </header>
        <main className="flex flex-col gap-15">
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-dark)">
              # Projects
            </h3>
            <section className="mt-[30px] flex gap-5 overflow-auto">
              {allProjects.map((project) => (
                <Project project={project} />
              ))}
            </section>
          </section>
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-dark)">
              # Now
            </h3>
            <section>
              <div className="flex flex-col gap-2 mt-[30px]">
                <h3>Local Bank</h3>
                <p className="text-(--gray-dark)">
                  Terminal based bank app in java. WIP.
                </p>
              </div>
            </section>
          </section>
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-dark)">
              # Connect
            </h3>
            <section>
              <div className="flex gap-2 mt-[30px]">
                {allLinks.map((link) => (
                  <Link link={link} />
                ))}
              </div>
            </section>
          </section>
        </main>
      </section>
      <footer className="">
        <section className="border-(--gray-dark) border-t-1 flex justify-center">
          <div className="md:w-[600px] flex justify-end">
            <div className="flex items-center">
              <img
                src="/assets/icons/location.svg"
                alt="location-icon"
                width={"15"}
                height={"15"}
              />
              <h4 className="text-(--gray-dark) font-(family-name:--font-mono) text-sm p-2">
                chennai, india
              </h4>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;
