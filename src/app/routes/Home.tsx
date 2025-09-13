import Project from "../../components/ui/Project";
import SideProject from "../../components/ui/SideProject";
import Link from "../../components/ui/Link";
import type { project, link, stack } from "../../types/types";
import Stack from "../../components/ui/Stack";

function Home() {
  const allLinks: Array<link> = [
    {
      name: "email",
      link: "s@santhosh.dev",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/santa-s/",
    },
    {
      name: "github",
      link: "https://github.com/notsanta20",
    },
  ];
  const techStack: Array<stack> = [
    {
      title: "Language",
      stack: [
        "Python",
        "Java",
        "JavaScript/TypeScript",
        "PostgreSQL",
        "MongoDB",
        "HTML/CSS",
      ],
    },
    {
      title: "Framework",
      stack: [
        "React",
        "Node.js",
        "Flask",
        "FastAPI",
        "Express",
        "TailwindCSS",
        "Prisma ORM",
      ],
    },
    {
      title: "Tools and Technology",
      stack: ["Git", "VS Code", "IntelliJ", "Pycharm"],
    },
  ];
  const allProjects: Array<project> = [
    {
      name: "Portfolio App",
      link: "santhosh.dev",
      description: "Portfolio app",
      techStack: ["React", "TailwindCSS"],
    },
    {
      name: "Yabble",
      link: "https://yabble.santhosh.dev/",
      description:
        "Social media app built with react, node.js, PostgreSQL, socket.io & jwt auth.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "JWT",
        "Cloudinary",
        "TailwindCSS",
      ],
    },
    {
      name: "Chatterbox",
      link: "",
      description: "Messaging app",
      techStack: ["React", "Node.js", "PostgreSQL", "JWT", "TailwindCSS"],
    },
    {
      name: "Sky safe",
      link: "",
      description:
        "File uploader app built with node.js, ejs, PostgreSQL & jwt auth and Supabase.",
      techStack: [
        "Node.js",
        "PostgreSQL",
        "EJS",
        "JWT",
        "Supabase",
        "TailwindCSS",
      ],
    },
  ];
  const sideProjects: Array<project> = [
    {
      name: "Portfolio App",
      link: "santhosh.dev",
      description: "portfolio app",
      techStack: ["React", "TailwindCSS"],
    },
    {
      name: "Yabble",
      link: "https://yabble.santhosh.dev/",
      description:
        "social media app built with react, node.js, PostgreSQL, socket.io & jwt auth.",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "JWT",
        "Cloudinary",
        "TailwindCSS",
      ],
    },
    {
      name: "Chatterbox",
      link: "",
      description: "messaging app",
      techStack: ["React", "Node.js", "PostgreSQL", "JWT", "TailwindCSS"],
    },
    {
      name: "Sky safe",
      link: "",
      description:
        "file uploader app built with node.js, ejs, PostgreSQL & jwt auth and Supabase.",
      techStack: [
        "Node.js",
        "PostgreSQL",
        "EJS",
        "JWT",
        "Supabase",
        "TailwindCSS",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-15 h-dvh md:h-full w-full mt-[50px] md:mt-[100px] text-white">
      <section className="md:w-[600px] md:self-center px-5 min-w-0 flex-auto flex flex-col gap-10">
        <header>
          <h1 className="font-(family-name:--font-mono) text-lg">Santhosh</h1>
          <section className="mt-[20px] flex flex-col gap-[40px]">
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
              thinking about my next side project or startup.
            </h2>
          </section>
        </header>
        <main className="flex flex-col gap-10">
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-light)">
              #Projects
            </h3>
            <section className="mt-[10px] flex flex-col gap-5">
              {allProjects.map((project) => (
                <Project project={project} />
              ))}
            </section>
          </section>
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-light)">
              #Side Projects/Apps
            </h3>
            <section className="mt-[10px] flex flex-col gap-2">
              {sideProjects.map((project) => (
                <SideProject sideProject={project} />
              ))}
            </section>
          </section>
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-light)">
              #TechStack
            </h3>
            <section className="flex flex-col gap-3 mt-[10px]">
              {techStack.map((stack) => (
                <Stack stack={stack} />
              ))}
            </section>
          </section>
          <section>
            <h3 className="font-(family-name:--font-mono) text-(--gray-light)">
              #Connect
            </h3>
            <section>
              <div className="flex gap-2 mt-[10px]">
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
