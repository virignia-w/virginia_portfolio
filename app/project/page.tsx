"use client";
import React, { use } from "react";
import { useEffect, useState, useRef } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import { recordTraceEvents } from "next/dist/trace";

export default function Page() {
   const [activeIndex, setActiveIndex] = useState(0);
   const projectsRef = useRef(null);

   const projects = [
      {
         type: "UX/UI Digital Design",
         title: "Transforming a College Website with User-Centered UX Strategies",
         img: "images/project/workshop.png",
         link: "/works",
      },
      {
         type: "UX Product Design",
         title: "How I Reviving the Legend- Duke125",
         img: "images/project/duke.png",
         link: "#",
      },
      {
         type: "UX Service Design",
         title: "International Student Support Service",
         img: "images/project/kingston.png",
         link: "#",
      },
      {
         type: "UX/UI Digital Design",
         title: "Cooking with Confidence: A Beginner-friendly recipe App",
         img: "images/project/cook.png",
         link: "#",
      },
      {
         type: "UX/UI Digital Design",
         title: "Optimising User Experience: Reorganizing the UI Layout of a College Website",
         img: "images/project/IWKB.png",
         link: "#",
      },
      {
         type: "",
         title: "Art",
         img: "images/project/IWKB.png",
         link: "#",
      },
   ];

   //  useEffect(() => {
   //    const container = document.querySelector(".projectsCon"); // 確保選到正確的滾動容器
   //    const handleScroll = () => {
   //      const scrollTop = container.scrollTop || window.scrollY; // 根據滾動容器獲取滾動高度
   //      const projectRows = document.querySelectorAll(".projectRow");

   //      projectRows.forEach((row, index) => {
   //       const offsetTop = (row as HTMLElement).offsetTop - scrollTop;

   //        if (offsetTop < window.innerHeight / 2 && offsetTop > 0) {
   //          row.classList.add("active");
   //        } else {
   //          row.classList.remove("active");
   //        }
   //      });
   //    };

   //    container.addEventListener("scroll", handleScroll);

   //    return () => {
   //      container.removeEventListener("scroll", handleScroll);
   //    };
   //  }, []);

   return <>

      <div id="container" className="container-fluid m-0 p-0 gx-0">
         <div className="row">
            <div className="col-12" id="myHeader">
               <Header />
            </div>
         </div>
         <div className="container-all projectMenu">
            {/* <div className="col-2 container p-0 m-0 d-flex">
               <Nav />
            </div> */}
            <div className="projectFirst">
               {projects.map((project, index) => (
                  <div className={`projectCard  ${project.title === "Art" ? "artCard" : ""}`} key={index}>
                     <img src={project.img} className="img-fluid" alt="..." />
                     <div className="projectContent">
                        <p className="projectType">{project.type}</p>
                        <h4>
                           <a className="projectText projectLink" href={project.link}>
                              {project.title}
                           </a>
                        </h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="row footerRow">
            <footer className="container-fluid text-center">
               <p>&copy; 2024 Virignia Wang</p>
            </footer>
         </div>
      </div>

   </>
}