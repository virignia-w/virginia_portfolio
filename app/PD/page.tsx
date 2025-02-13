// import React from "react";
import Header from "../components/header";
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "../works.css";


export default function Page() {
    return <>
        <div id="container-fluid wrapper m-0 p-0 gx-0">
            <div className="row ">
                <div className="col-12" id="myHeader">
                    <Header />
                </div>
            </div>


            <div className="container-lg workContent col-12 ">
                <div className="row col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/project">Project</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Transforming a College Website with User-Centered UX Strategies</li>
                        </ol>
                    </nav>
                </div>
                <div className="row col-12 workHead-card">
                    <p className="p1">UX/UI Design Group Project</p>
                    <h1>Transforming a College Website with User-Centered UX Strategies</h1>
                    <h2>Part 1- PD Opportunities page aka workshop and events</h2>
                </div>
                <div className="row work-mainPic">
                    <img src="images/project/PDdisplay.png" alt="PDdisplay" />
                </div>
                <hr className="hr" />
                <div className="row p-0 ms-0 work-objective col-12">

                    <div className="date col-5 text-center">

                        <h1 className="align-top">DATE</h1>
                        <h3 className="date-text ">January-April 2024</h3>
                    </div>
                    <div className="vr"></div>
                    <div className="role col-5 text-center ">
                        <h1 className="align-top">ROLE</h1>
                        <h3 className="date-text">UX researcher</h3>
                        <h3 className="date-text">&</h3>
                        <h3 className="date-text">UX/UI designer</h3>
                    </div>

                </div>
                <hr className="hr" />
                <div className="row p-0 ms-0 work-bcg col-12">
                    <div className="work-bcg-text">
                        <h1 className="work-titlt-text">Introduction/Background</h1>
                        <p className="p1">Imagine you're a busy college faculty member, juggling classes, meetings, and grading, when you're required to attend a mandatory workshop on a new learning platform. Finally, you manage to carve out a few minutes between classes, open the webpage to register... and you're immediately met with confusion and frustration. <br></br><br></br>There are what you would see</p>
                    </div>

                    <div className="row col-12 oldPicCon">
                        <div className="oldPic col-6 mx-auto col-md d-block">
                            <img src="images/project/PD.png" className="img-fluid"  alt="PD page" />
                        </div>
                        <div className="oldPic col-6 col-md mx-auto d-block">
                            <img src="images/project/PDwork.png" className="img-fluid"  alt="PD page" />
                        </div>

                    </div>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <div className="bcg-test">
                    <h1 className="work-titlt-text">The task we focus on</h1>
                    <p className="p1">1. Enhance UI: Make the interface more intuitive and visually appealing.</p>
                    <p className="p1">2. Simplify content: Reduce information overload for easier navigation.</p>
                    <p className="p1">3. Streamline registration: Minimize clicks to speed up the sign-up process.</p>
                    <p className="p1">4. Improve discoverability: Help users quickly find courses</p>
                    </div>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1>Action & My role</h1>
                    <p className="p1">Our team of six UX researchers and designers worked collaboratively on this project.</p>
                    <div className="row work-research col-12">
                        <div className="workH col-5">
                            <h3 className="underline">01 Research</h3>
                            <p className="p1">Conducted literature reviews, heuristic analyses, competitive analysis, and 3 user interviews during the wireframe and prototype phases.</p>
                        </div>
                        <div className="work-research-img col-7">
                            <img src="images/project/resaerchImg.png" />
                        </div>
                    </div>
                    <hr className="hr-2" />
                    <div className="row work-research-role col-12">
                        <div className="col-3">
                            <h3 className="myRole">My Role</h3>
                        </div>
                        <div className="col-9">
                            <p className="p1 myRole">Led the competitive analysis, completed a heuristic analysis, and alternated between note-taker and interviewer in user interviews.</p>
                        </div>
                    </div>
                    <hr className="hr-2" />
                    <div className="row d-flex research-img">
                        <img className="col-4" src="images/project/campSac.png" alt="competitive analysis" />
                        <img className="col-4" src="images/project/litera.png" alt="literature review" />
                        <img className="col-4" src="images/project/heurEva.png" alt="heuristic analysis" />
                    </div>
                    <div className="row col-12">
                        <div className="bcg-test">
                        <div className="work-design workH ">
                            <h3 className="underline">02 Design (sitemap/sketch/wireframe/usability testing)</h3>

                        </div>
                        <div className="work-design-text">
                            <p className="p1 col-6">Led the design phase by collaborating with clients through sketches, wireframes, and prototypes to finalize the direction.</p>
                            <div id="carouselExampleFade" className="carousel slide carousel-fade backgroundCarousel col-6 ">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/project/LOFIdis3.jpg" className="d-block w-100 work-bcg-img" alt="Lofi wireframe" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/project/LOFIdis4.jpg" className="d-block w-100 work-bcg-img" alt="Lofi wireframe" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev carousel-button" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next carousel-button" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <hr className="hr-2" />
                        <div className="row work-research-role col-12">
                            <div className="col-3">
                                <h3 className="myRole">My Role</h3>
                            </div>
                            <div className="col-9">
                                <p className="p1 myRole">I took the lead in creating the initial sketches, provided the primary design concept, and was responsible for building the high-fidelity wireframe and prototype.</p>
                            </div>
                        </div>
                        <hr className="hr-2" />
                        </div>
                    </div>
                    
                    
                    <div className="row work-result col-12">
                        <div className="work-result-text workH">
                            <h3 className="underline">03 Result</h3>
                            <p className="p1">The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>
                        </div>
                        <div className="work-result-img">
                            <img className="col-4" src="images/project/displayboard.png" alt="dispaly board" />
                            <img className="col-4" src="images/project/team.png" alt="team" />

                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row work-proto col-12">
                        <h1>Final Prototype</h1>
                        <p className="p1">The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>

                        <video className="displayVideo" width="800" height="auto" controls>
                            <source src="images/project/PDrecord.mov" type="video/mp4" />
                        </video>
                    </div>
                    <hr className="hr" />
                    <div className="row work-team col-12">
                        <h1>Meet the Teame</h1>
                        <div className="row meetTeam">
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/Dorna.png" alt="Dorna Dahal" />
                                <h2>Dorna Dahal</h2>
                                <a href="https://www.linkedin.com/in/dorna-dahal-b12bb9296/" target="_blank">
                                <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/Harshit.png" alt="Harshit Bhardwaj" />
                                <h2>Harshit Bhardwaj</h2>
                                <a href="https://www.linkedin.com/in/harshit-daga/" target="_blank">
                                <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/Shreya.png" alt="Shreya Narayan" />
                                <h2>Shreya Narayan</h2>
                                <a href="https://www.linkedin.com/in/shreya-narayan-945328120/" target="_blank">
                                <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/Surya.png" alt="Surya Tamang" />
                                <h2>Surya Tamang</h2>
                                <a href="https://www.linkedin.com/in/suryatamang405/" target="_blank">
                                <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row work-reach col-12">
                        <div className="col-7">
                            <h1>Reach out if you're interesting of more details</h1>
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

            </div>


            <footer className="container-fluid text-center ">
                <p>&copy 2024 Virignia Wang</p>
            </footer>
        </div>
    </>
}