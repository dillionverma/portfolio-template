import { Icons } from "@/components/icons";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import TextReveal from "@/components/magicui/text-reveal";
import WordRotate from "@/components/magicui/word-rotate";
import { ProjectCard } from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, GlobeIcon } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Chat Collect",
    dates: "Jan 2024 - Present",
    active: true,
    description:
      "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://chatcollect.com",
        icon: <GlobeIcon className="h-4 w-4" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
  {
    title: "Magic UI",
    dates: "June 2023 - Present",
    active: true,
    description:
      "Designed, developed and sold animated UI components for developers.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://magicui.design",
        icon: <GlobeIcon className="h-4 w-4" />,
      },
    ],
    image: "",
    video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
        icon: <GlobeIcon className="h-4 w-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <GitHubLogoIcon className="h-4 w-4" />,
      },
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    dates: "April 2023 - Present",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://automatic.chat",
        icon: <GlobeIcon className="h-4 w-4" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
];

export default function Component() {
  return (
    <main className="flex flex-col min-h-[100dvh] divide-y">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m John Doe 👋
              </h1>
              <p className="max-w-[600px] md:text-xl">
                I&apos;m a passionate software engineer with an interest in{" "}
                <WordRotate
                  className="inline-flex w-full text-left font-bold leading-none tracking-tighter"
                  words={[
                    "Web Development.",
                    "UI/UX Design.",
                    "Cloud Computing.",
                    "Web Security.",
                    "Frontend Frameworks.",
                    "Backend Architectures.",
                    "API Design.",
                    "Content Management Systems.",
                    "SEO Strategies.",
                    "Web Performance Optimization.",
                    "Responsive Design.",
                    "JavaScript Libraries.",
                  ]}
                />
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "gap-2 whitespace-pre md:flex",
                  "group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
              >
                View My Work
                <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:hello@example.com"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  }),
                  "gap-2 whitespace-pre md:flex",
                  "group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter"
                )}
              >
                Contact Me
                <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={14}
              radius={80}
            >
              <Icons.nextjs className="w-8 h-8" />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[30px] w-[30px] border-none bg-transparent"
              duration={20}
              delay={7}
              radius={80}
            >
              <Icons.react className="w-8 h-8" />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[50px] w-[50px] border-none bg-transparent"
              reverse
              radius={160}
              duration={20}
            >
              <Icons.framermotion className="w-8 h-8" />
            </OrbitingCircles>
            <OrbitingCircles
              className="h-[50px] w-[50px] border-none bg-transparent"
              reverse
              radius={160}
              duration={20}
              delay={20}
            >
              <Icons.gitHub className="w-8 h-8" />
            </OrbitingCircles>

            <OrbitingCircles
              className="h-[50px] w-[50px] border-none bg-transparent"
              reverse
              radius={120}
              duration={10}
            >
              <Icons.tailwindcss className="w-8 h-8" />
            </OrbitingCircles>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
        <TextReveal text="I love to build using react, next.js, tailwindcss and framer motion" />
      </section>

      <section id="projects"></section>

      <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex web applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-[800px] mx-auto">
            {projects.map((project, id) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a project in mind or just want to say hello? Fill out the
              form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
