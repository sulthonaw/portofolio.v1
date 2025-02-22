import Clock from "@/components/clock";
import AnimatedClock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { ArrowUpCircleIcon, BriefcaseIcon, FolderIcon, ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="container flex justify-between items-center py-8">
        <h1 className="font-semibold">UTHONN.</h1>
        <ul className="lg:flex gap-8 items-center hidden">
          <li>Home</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>About Me</li>
        </ul>
        <AnimatedClock />
        <Button>
          Get int touch
          <ArrowUpCircleIcon className="!w-6 !h-6 rotate-45" />
        </Button>
      </nav>
      <section className="container items-center flex gap-16 py-32">
        <div className="flex-1">
          <Image src="/profile.jpg" alt="Muhammad Sulthon Aulia Wijaya" width={100} height={100} className="rounded-full mb-5 w-28 object-cover object-[0px_-10px] h-16" />
          <h1 className="text-5xl leading-tight">Hello! I'm Muhammad Sulthon Aulia Wijaya</h1>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl mb-5">An informatics student at Brawijaya University</h1>
          <p className="mb-5 text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nobis saepe doloremque vitae obcaecati veniam commodi aliquam odit pariatur sed neque culpa officia voluptas
            dignissimos, quis numquam error quasi veritatis.
          </p>
          <div className="flex gap-2">
            <Button>Talk with me</Button>
            <Button variant={"outline"}>See my work</Button>
          </div>
        </div>
      </section>
      <section className="bg-sky-100">
        <section className="container py-32 flex gap-32 ">
          <div className="flex-1">
            <h1 className="text-5xl mb-16">Working Experience</h1>
            <ul>
              {Array.from({ length: 4 }).map((_, index) => (
                <li className="mb-5" key={index}>
                  <div className="flex mb-5 gap-4 items-center">
                    <div className="bg-white p-4 rounded-md w-max">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                      </svg>
                    </div>
                    <div>
                      <h2>
                        Product Design at <span className="font-semibold">Uber</span>
                      </h2>
                      <p className="text-slate-500">February 2018 - February 2020</p>
                    </div>
                  </div>
                  {index !== 3 && <hr className="border-slate-400 border-1" />}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl mb-16">Awwards & Recognition</h1>
            <ul>
              {Array.from({ length: 4 }).map((_, index) => (
                <li className="mb-5" key={index}>
                  <div className="flex mb-5 gap-4 items-center">
                    <div className="bg-white p-4 rounded-md w-max">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <h2>
                          Product Design at <span className="font-semibold">Uber</span>
                        </h2>
                        <p className="text-slate-500">February 2018 - February 2020</p>
                      </div>
                      <ArrowUpRight />
                    </div>
                  </div>
                  {index !== 3 && <hr className="border-slate-400 border-1" />}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
      <section className="bg-sky-100">
        <div className="container py-16  ">
          <div className="flex justify-between mb-10">
            <h1 className="text-4xl">I can help you</h1>
            <Button variant={"outline"} className={"border-slate-500"}>
              See my work
            </Button>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white w-max">
                  <FolderIcon className="w-4 h-4" />
                </div>
                <h1 className="text-2xl">Full pages Website Design</h1>
              </div>
              <div className="flex gap-4">
                <p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laudantium ducimus! Consectetur voluptatum, excepturi, error, laudantium dolorem corrupti in perspiciatis magnam
                  sequi ducimus ipsum tempore officiis nam at? Fugit, harum!
                </p>
                <div className="w-10 h-10">
                  <ArrowUpCircleIcon className="w-10 h-10" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 my-16">
              <Image src={"/portofolio.png"} width={800} height={800} alt="portofolio" className="rounded-xl" />
              <Image src={"/portofolio.png"} width={800} height={800} alt="portofolio" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-10 mb-5">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white w-max">
                  <FolderIcon className="w-4 h-4" />
                </div>
                <h1 className="text-2xl">Full pages Website Design</h1>
              </div>
              <div className="flex gap-4">
                <p className="text-sm text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, laudantium ducimus! Consectetur voluptatum, excepturi, error, laudantium dolorem corrupti in perspiciatis magnam
                  sequi ducimus ipsum tempore officiis nam at? Fugit, harum!
                </p>
                <div>
                  <ArrowDownCircleIcon className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container grid pt-32 py-32 gap-16 grid-cols-2">
        <div>
          <h1 className="text-5xl mb-10">Experience with a variety of Projects and industries</h1>
          <p className="text-slate-500 mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore suscipit odio perspiciatis aliquid nulla accusantium dicta corporis architecto molestiae quas. Repellat ipsa quam eligendi
            vel aliquam ducimus quasi, velit ratione?
          </p>
          <div className="flex gap-6">
            <Button>See my work</Button>
            <Button variant={"outline"}>See my work</Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={index} className="p-10 flex w-full h-full justify-center items-center  even:bg-sky-100 border-r last:border-r-0 last:border-t-0">
                    <div>
                      <h1 className="font-semibold text-2xl">50+</h1>
                      <p className="text-slate-500 text-sm">project finished</p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className="p-10 flex w-full h-full items-center justify-center even:bg-sky-100 border-r last:border-r-0 last:border-t-0">
                  <BriefcaseIcon width={50} height={50} className="mx-auto" />
                </div>
              );
            })}
          </div>
          <hr />
          <div className="grid grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => {
              if (index % 2 === 1) {
                return (
                  <div key={index} className="p-10 flex w-full h-full justify-center items-center  odd:bg-sky-100 border-r last:border-r-0 last:border-t-0">
                    <div>
                      <h1 className="font-semibold text-2xl">50+</h1>
                      <p className="text-slate-500 text-sm">project finished</p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index} className="p-10 flex w-full h-full items-center justify-center odd:bg-sky-100 border-r last:border-r-0 last:border-t-0">
                  <BriefcaseIcon width={50} height={50} className="mx-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-sky-100 py-32">
        <div className="container">
          <h1 className="text-center text-5xl">Selected Works</h1>
          <div className="grid grid-cols-2 gap-10 mt-16">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl">
                <div className="group cursor-pointer max-h-[510px] overflow-hidden">
                  <Image src={"/portofolio.png"} width={800} height={500} alt="portofolio" className="rounded-2xl w-full h-72 group-hover:h-60 mb-5 object-cover transition-all" />
                  <h1 className="text-3xl font-medium mb-5">Belibang</h1>
                  <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                  <p className="mb-5 text-slate-400 font-medium text-sm">Agustus 2020</p>
                  <p className="text-slate-500 mb-4 line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti possimus totam sunt necessitatibus fuga? Iure non placeat, quae aliquid recusandae dolores explicabo
                    distinctio nulla sequi saepe aliquam at repellat.
                  </p>
                  <Button className={"hidden group-hover:block"}>See my work</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-20">
        <p className="mb-10 text-center text-lg">Have a project?</p>
        <h1 className="text-7xl mb-10 text-center">Let's talk with me</h1>
        <Button className={"mx-auto block"}>Talk with me</Button>
      </section>
      <footer className="container grid grid-cols-2 py-16">
        <div className="flex gap-16">
          <h1 className="font-semibold">UTHONN.</h1>
          <p>Software Engineer</p>
        </div>
        <ul className="flex gap-8 justify-end">
          <li>Home</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>About Me</li>
        </ul>
      </footer>
    </>
  );
}
