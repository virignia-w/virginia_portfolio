// import React from "react";
import Header from "../components/header";
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "../works.css";


export default function Page() {
    return <>
        <div id="container wrapper m-0 p-0 gx-0">
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
                            <li className="breadcrumb-item active" aria-current="page">International Student Support Service</li>
                        </ol>
                    </nav>
                </div>
                <div className="row col-12 workHead-card">
                    <p className="p1">Service Design (Group project)</p>
                    <h1>International Student Support Service</h1>
                    <h2>Leveraging UX Design Thinking to Empower International Student Support.</h2>
                </div>
                <div className="row work-mainPic">
                    <img src="images/project/kingston.jpg" alt="Kingston" />
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
                    </div>
                </div>
                <hr className="hr" />
                <div className="row p-0 ms-0 work-bcg col-12">
                    <div className="work-bcg-text">
                        <h1 className="work-titlt-text">My Role</h1>
                        <p className="p1">In this project, some tasks were done in groups, while others were assigned to individuals.<br></br><br></br>Specifically, I was responsible for brainstorming topics, creating a Gantt chart, conducting literature reviews and competitive scans, and interviewing over half of the participants during the research phase. During the design thinking session, I facilitated the first issue and took notes for the rest of the activities. For the requirement phase, we initially generated requirements individually and then combined them to create the final set of requirements.</p>
                    </div>
                </div>
                <div className="row p-0 ms-0 work-bcg col-12 work-section">
                    <div className="bcg-test">
                        <div className="work-bcg-text">
                            <h1 className="work-titlt-text">Background</h1>
                            <p className="p1">The International Student Support project is one we undertook for the city of Kingston while I was in SLC's UX design program. Its main goal is to understand the demands of international students and the challenges they encounter. Our group will specifically focus on 'Immigration Support'.</p>
                        </div>
                    </div>
                </div>
                <div className="row p-0 ms-0 work-bcg col-12 work-section">
                    <h1 className="work-titlt-text">Introduction</h1>
                    <div className="work-bcg-text col-7">
                        
                        <p className="p1">When people think of immigration support, they tend to envision only the services related to the study permit or permanent residency application process. However, immigration support encompasses much more than that. It includes information on how to prepare for and adapt to a new environment, how to deal with winter, knowledge of local bylaws and cultural norms, and even understanding customs such as tipping and joining social gatherings, which vary across different cultures.</p>
                    </div>
                    <div className="work-research-img col-5">
                        <img src="images/project/event1.jpg" alt="event picture" />
                    </div>
                </div>
                <hr className="hr" />
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1>Business Goal</h1>
                    <p className="p1">Find out the top 5 issues that the city should focus on and solutions for each issue.</p>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12 d-flex research-img">
                    <div className="bcg-test">
                        <h1>What We Do</h1>
                        <div className="row img-row">
                            <img className="col-3" src="images/project/research01.jpg" alt="01 research" />
                            <img className="col-3" src="images/project/top5.jpg" alt="02 top5 issues" />
                            <img className="col-3" src="images/project/designthink.jpg" alt="03 design thinking session" />
                            <img className="col-3" src="images/project/requirment.jpg" alt="04 requirement" />
                        </div>
                    </div>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <div className="workH ">
                        <h3 className="underline">01 Research</h3>
                        <p className="p1">To clarify the immigration issues encountered by international students living in Kingston, we are conducting a competitive scan, online survey, and interviews to define the top five issues they face.</p>

                    </div>
                    <hr className="hr" />
                    <div className="row work-research col-12">
                        <div className="workH col-7">
                            <h3 className="underline">02 Top 5 Issues</h3>
                            <p className="p1">After combining and comparing the results obtained from the survey and interviews, we identified common issues and narrowed them down to the top five areas that require our utmost attention.</p>
                            <ol>
                                <li className="p1">Lack of Awareness</li>
                                <li className="p1">No Clarity on Documents and Processes</li>
                                <li className="p1">Concerns About Fees</li>
                                <li className="p1">Challenges Faced by International Students with Families</li>
                                <li className="p1">Language Barriers and Understanding</li>
                            </ol>
                        </div>
                        <div className="work-research-img col-5">
                            <img src="images/project/top5issue.jpg" alt="Top 5 issues" />
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row work-research d-flex col-12">
                        <div className="bcg-test">
                            <div className="row col-12">
                            <div className="workH col-7">
                                <h3 className="underline">03 Design thinking session</h3>
                                <p className="p1">We hosted a Design Thinking Session during the City of Kingston's International Student Symposium. The session aimed to generate and identify solutions for our top five issues. We conducted five activities: empathy mapping, design challenge and voting, brainstorming, journey mapping, and scenario role-playing. We had approximately eight participants.</p>
                            </div>
                            <div className="work-research-img col-5">
                                <img src="images/project/event2.jpg" alt="Event picture" />
                            </div>
                            </div>
                            <h4 className="kingston-issue kingston-issue-l d-flex">Lack of Awareness</h4>
                            <div className="kingston-issue-img">
                                <img className="col-5 img-fluid" src="images/project/isuue1-1.jpg" alt="Isuue1" />
                                <img className="col-5 img-fluid" src="images/project/isuue1-2.jpg" alt="Isuue1" />
                            </div>
                            <h4 className="kingston-issue d-flex kingston-issue-n">No Clarity on Documents and Processes</h4>
                            <div className="kingston-issue-img">
                                <img className="col-5" src="images/project/isuue2-1.jpg" alt="Isuue2" />
                                <img className="col-5" src="images/project/isuue2-2.jpg" alt="Isuue2" />
                            </div>
                            <h4 className="kingston-issue d-flex kingston-issue-c">Concerns About Fees</h4>
                            <div className="kingston-issue-img">
                                <img className="col-5" src="images/project/isuue3-1.jpg" alt="Isuue3" />
                                <img className="col-5" src="images/project/isuue3-2.jpg" alt="Isuue3" />
                            </div>
                            <h4 className="kingston-issue d-flex kingston-issue-ch">Challenges Faced by International Students with Families</h4>
                            <div className="kingston-issue-img">
                                <img className="col-5" src="images/project/isuue4-1.jpg" alt="Isuue4" />
                                <img className="col-5" src="images/project/isuue4-2.jpg" alt="Isuue4" />
                            </div>
                            <h4 className="kingston-issue d-flex kingston-issue-la">Language Barriers and Understanding</h4 >
                            <div className="kingston-issue-img">
                                <img className="col-5" src="images/project/isuue5-1.jpg" alt="Isuue5" />
                                <img className="col-5" src="images/project/isuue5-2.jpg" alt="Isuue5" />
                            </div>
                        </div>
                    </div>

                    <hr className="hr" />
                    <div className="row work-result col-12">
                        <div className="work-result-text workH">
                            <h3 className="underline">04 Requirement</h3>
                            <p className="p1">After completing all the research activities, each of us individually analyzed and generated requirements, which were then combined to identify common and optimal ones. As a result, we have compiled a list of 35 requirements as a group.</p>
                            <h4>Top 5</h4>
                            <ol>
                                <li className="p1">Develop a user-friendly, multilingual digital platform for accessing immigration support services, including FAQs, guides, and live chat support.</li>
                                <li className="p1">Implement campaigns through social media, university channels, and local community networks to raise awareness about available immigration support services.</li>
                                <li className="p1">Provide detailed checklists and guides for common processes, such as obtaining a Social Insurance Number (SIN), study permit extensions, and PGWP applications.</li>
                                <li className="p1">Offer legal consultation and guidance on immigration procedures, visa applications, and permit extensions.</li>
                                <li className="p1">Provide services for document compatibility and preparation assistance, ensuring documents meet Canadian standards.</li>
                            </ol>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row work-result col-12">
                        <h1 className="work-titlt-text">Conclusion</h1>
                        <div className="work-research-img col-5">
                            <img src="images/project/event3.jpg" alt="Top 5 issues" />
                        </div>
                        <div className=" workH col-6">
                            <p className="p1">Based on all the processes we've undertaken, we've found that the city of Kingston needs to improve awareness of the available immigration support services. This can be achieved through initiatives such as campus publicity, targeted emails to international students, and hosting additional workshops.<br></br><br></br>Furthermore, providing a colorful orientation package and assigning mentors would be highly beneficial. International students often find themselves overwhelmed and confused while seeking help. However, they consider the city of Kingston and educational institutions as the most reliable sources for newcomers, provided they offer sufficient support</p>

                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="row work-team col-12">
                        <h1>Meet the Teame</h1>
                        <div className="row meetTeam">
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/arch.jpg" alt="Archana" />
                                <h2>Archana Bhoyasa Keenoo</h2>
                                <a href="https://www.linkedin.com/in/b-keenoo/" target="_blank">
                                    <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/dj.jpg" alt="Digvijay" />
                                <h2>Digvijay P R</h2>
                                <a href="https://www.linkedin.com/in/digvijaypr/" target="_blank">
                                    <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/macla.jpg" alt="Macla" />
                                <h2>Macla Peñaranda</h2>
                                <a href="https://www.linkedin.com/in/maclapenaranda/" target="_blank">
                                    <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                            <div className="teamCard col-3">
                                <img className="memberPic " src="images/project/Shreya.png" alt="Shreya" />
                                <h2> Shreya Narayan</h2>
                                <a href=" https://www.linkedin.com/in/shreya-narayan-945328120/" target="_blank">
                                    <FaLinkedin className="linkedinB" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row work-reach col-12">
                        <div className="col-7 ">
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

            </div >
            <footer className="container-fluid text-center ">
                <p>&copy 2024 Virignia Wang</p>
            </footer>
        </div >
    </>
}