import React from "react";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
   return <>

      <div className="row contactRow">
         <h1>Contact Me</h1>
         <div className="contactCon">
            <div className="col-7">
               <p className="p1">Hey! If you're interested in working with me or would like more details, feel free to reach out to me! </p>
            </div>
            <div className="col-5 contactBCon">
               <div><IoMail className="emailB" />ning93315@gmail.com
               </div>
               <div>
                  <a href="https://www.linkedin.com/in/virginia-wang-31820a209/" target="_blank">
                     <FaLinkedin className="linkedinB" />
                  </a>
                  <a href="https://www.instagram.com/vir_n315/" target="_blank">
                     <FaInstagram className="instagramB" />
                  </a>
                  <a href="https://www.behance.net/ning933152215" target="_blank">
                     <FaBehance className="behanceB" />
                  </a>
               </div>
            </div>
         </div>
      </div>

   </>
}