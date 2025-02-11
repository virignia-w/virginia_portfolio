import React from "react";
import Header from "../components/header";
import Sidenav from "../components/sidenav";
import homeBG from "../public/homeBac.png"
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { PiFilePdf } from "react-icons/pi";


export default function Page() {
   return <>
      <Header />

      <div className="homeBodyCont">

         <div className="greetingComtainer">
            <div className="sayHi">
               <div className="greetingHey anima">
                  <img src="images/Hey.png" />
               </div>
               <div className="greetingThere anima">
                  <img src="images/there.png" />
               </div>
            </div>
            <div className="whoIam">
               <div className="greetingIm anima">
                  <img src="images/Im.png" />
               </div>
               <div className="greetingNing anima">
                  <img src="images/NING.png" />
               </div>
               <div className="greetingWang anima">
                  <img src="images/Wang.png" />
               </div> 
            </div>
            <div className="also">
               <div className="greetingAlso anima">
                  <img src="images/also.png" />
               </div>
               <div className="greetingVir anima">
                  <img src="images/Vir.png" />
               </div>
               <div className="greetingDesi anima">
                  <img src="images/Designer.png" />
               </div>
            </div>
         </div>
         <section className="homeBtn">
            <a href="https://drive.google.com/file/d/12qJEZ78C6yj9oftc8nn2pKrDXipuiEf0/view?usp=sharing" target="_blank">
            <button className="resumeB"><p className="resumeP">RESUME</p><PiFilePdf className="pdfB" /></button>
            </a>
            <a href="https://www.linkedin.com/in/virginia-wang-31820a209/" target="_blank">
               <FaLinkedin className="linkedinB" />
            </a>
            <a href="https://www.instagram.com/vir_n315/" target="_blank">
               <FaInstagram className="instagramB" />
            </a>
            <a href="https://www.behance.net/ning933152215" target="_blank">
               <FaBehance className="behanceB" />
            </a>
         </section>


         <div className="homeBGContainer">
            <Image className="homeBG" fill src={homeBG} objectFit={'contain'} alt="home page background" />
         </div>
      </div>


      <footer className="container-fluid text-center ">
         <p>&copy; 2024 Virignia Wang</p>
      </footer>

   </>
}