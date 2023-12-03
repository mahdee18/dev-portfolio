import React, { useState } from "react";
import { content } from "./Content";
import SectionTitle from "./SectionTitile";

const Skills = () => {
  const { skills } = content;
  const [activeTab, setActiveTab] = useState("Frontend");

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "Frontend" && skill.type === "frontend") {
      return true;
    }
    if (activeTab === "Backend" && skill.type === "backend") {
      return true;
    }
    if (activeTab === "Others" && skill.type === "others") {
      return true;
    }
    return false;
  });
  return (
    <section className="mb-32 lg:pb-64 w-5/6 mx-auto" id="skills">
      <div className="text-start lg:text-center">
        <SectionTitle title={"My"} subtitle={"Skills"}></SectionTitle>
        <p className="text-gray-200 mt-3 text-lg">Mastering Technologies for Seamless Digital Experiences</p>
      </div>
      <div className="mt-6 mb-8">
        <div className="flex justify-center space-x-6">
          <button
            className={`tabButton ${activeTab === "Frontend" ? "activeTab" : ""}`}
            onClick={() => setActiveTab("Frontend")}
          >
            Frontend
          </button>
          <button
            className={`tabButton ${activeTab === "Backend" ? "activeTab" : ""}`}
            onClick={() => setActiveTab("Backend")}
          >
            Backend
          </button>
          <button
            className={`tabButton ${activeTab === "Others" ? "activeTab" : ""}`}
            onClick={() => setActiveTab("Others")}
          >
            Others
          </button>
        </div>
      </div>
      <div className="md:container py-6">
        <div className="grid md:grid-cols-3 gap-4 ">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="bg-slate-900 sm:cursor-pointer relative group w-full flex items-center gap-5 px-5 py-3 max-w-sm rounded-md border-2 border-slate-800"
            >
              <div className="w-1/5">
                <img
                  src={skill.logo}
                  alt="..."
                  className="group-hover:scale-125 duration-200"
                />
              </div>
              <div className="w-4/5">
                <h6 className="text-2xl">{skill.name}</h6>
                <p className="italic">{skill.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
