import React from "react"

export default function ProjectCard({ project }) {
  console.log(project)
  const { imageSrc, title, description, live_link, client, server } = project
  return (
    <>
      <div className="overflow-hidden rounded text-slate-500 shadow-lg shadow-slate-200 group relative">
        {/*  <!-- Image --> */}
        <img
          src={imageSrc}
          alt="card image"
          className="aspect-video w-full"
        />
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-accent">
              {title}
            </h3>
          </header>
          <p className="text-slate-200">
            {description}
          </p>
        </div>
        {/* Text overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 duration-500 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform">
          <div className="text-white text-left px-4">
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <p className="my-3 text-base text-white font-thin">
              {description}
            </p>
            <div className="flex justify-between py-4 gap-2">
              <a className="btn w-1/2 py-3 px-2 bg-accent text-white font-bold" href={client}>Client</a>
              <a href={server} className="btn w-1/2 py-3 px-2 bg-accent text-white font-bold">Server</a>
            </div>
            <a href={live_link} target="_blank" className="inline-flex btn h-10 w-full items-center justify-center gap-2 text-white disabled:shadow-none rounded-none">
              <span>View Live</span>
            </a>
          </div>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        {/* <div className="flex justify-end p-6 pt-0">
          <a href={live_link} target="_blank" className="inline-flex btn h-10 w-full items-center justify-center gap-2 text-white disabled:shadow-none rounded-none">
            <span>View Details</span>
          </a>
        </div> */}
      </div>


    </>
  )
}
