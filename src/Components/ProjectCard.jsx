import React from "react"

export default function ProjectCard({project}) {
    console.log(project)
    const {imageSrc,title,description,previewLink} = project
  return (
    <>
      <div className="overflow-hidden rounded text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={imageSrc}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
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
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 pt-0">
          <a href={previewLink} target="_blank" className="inline-flex btn h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>View Details</span>
          </a>
        </div>
      </div>
    </>
  )
}
