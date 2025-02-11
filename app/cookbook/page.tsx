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
                            <li className="breadcrumb-item active" aria-current="page">Transforming a College Website with User-Centered UX Strategies</li>
                        </ol>
                    </nav>
                </div>
                <div className="row col-12 workHead-card">
                    <p className="p1">UX/UI Design Sole Project</p>
                    <h1>Cooking with Confidence: A Beginner- friendly recipe App</h1>
                    <h2>"Start cooking without the freakout." Using UX strategies to take the stress out of cooking.</h2>
                </div>
                <div className="row work-mainPic">
                    <img src="images/project/cookbook-main.jpg" alt="Cookbook" />
                </div>
                <hr className="hr" />
                <div className="row p-0 ms-0 work-objective col-12">

                    <div className="date col-5 text-center">

                        <h1 className="align-top">DATE</h1>
                        <h3 className="date-text ">December 2022</h3>
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
                        <h1 className="work-titlt-text">My Role</h1>
                        <p className="p1">This project was an assignment from my UX/UI online class, and I worked independently as a sole team.</p>
                    </div>
                </div>
                <div className="row p-0 ms-0 work-bcg col-12 work-section bgc">
                    <div className="work-bcg-text">
                        <h1 className="work-titlt-text">Introduction/Background</h1>
                        <p className="p1">This project began with a personal need. Like many beginners, my friends and I started cooking for ourselves after moving out of our parents' homes.<br></br><br></br>
                            As we searched for recipes online and on apps, we discovered that the app I frequently used, COOKPAD, had several frustrating usability issues. These challenges inspired me to redesign the app to make it more intuitive and user-friendly, especially for beginners.<br></br><br></br>
                      There are what you would see</p>
                    </div>
                    <div className="row col-12 oldPicCon">
                        <div className="oldPic col-4 mx-auto col-md d-block">
                            <img src="images/project/cookpad-1.jpg" className="img-fluid" alt="cookpad page" />
                        </div>
                        <div className="oldPic col-4 mx-auto col-md d-block">
                            <img src="images/project/cookpad-2.jpg" className="img-fluid" alt="cookpad page" />
                        </div>
                        <div className="oldPic col-4 mx-auto col-md d-block">
                            <img src="images/project/cookpad-3.jpg" className="img-fluid" alt="cookpad page" />
                        </div>

                    </div>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1>Problem</h1>
                    <p className="p1"><strong>1. Inconvenient Navigation:</strong> Users often need to unlock their phones multiple times to check steps and timers, which is challenging with messy hands during cooking.</p>
                    <p className="p1"><strong>2. Confusing Categories:</strong> The recipe categories are not intuitive, making it difficult for users to find what they need.</p>
                    <p className="p1"><strong>3. Unclear Icons:</strong> Some icons are confusing or unrecognizable, which can interrupt the flow of following a recipe.</p>
                    <p className="p1"><strong>4. Lack of Beginner Support:</strong> New cooks struggle due to limited information about ingredients and cooking techniques.</p>
                    <p className="p1"><strong>5. Cluttered Home Page:</strong> The home page lacks organization, overwhelming users and hindering the discovery of recipes. </p>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1>Solution</h1>
                    <p className="p1">Providing "Play the Recipe"- enjoy full-screen guidance for each cooking step without interruptions The screen stays open with a timer function, allowing a smoother and more enjoyable cooking process.</p>
                    <p className="p1">1. Organize the category by meal types and cuisines.</p>
                    <p className="p1">2. Using easily recognizable icons.</p>
                    <p className="p1">3. Introducing section for Ingredients and Cooking Skills knowledge.</p>
                </div>
                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1 className="work-titlt-text">Action</h1>
                    <div className="workH ">
                        <h3 className="underline">01 Research</h3>
                        <div className="row d-flex cook-research-img">
                            <img className="col-4" src="images/project/campSac.png" alt="competitive analysis" />
                            <img className="col-4" src="images/project/litera.png" alt="literature review" />
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="workH ">
                        <h3>Personas</h3>
                        <p className="p1">After setting the goals, I interviewed some users to know what extra pain points were for them, and make sure every useful function I wanted to add was needed.</p>
                        <h3 className="painPoint">Their pain points:</h3>
                        <ol>
                            <li className="p1">It's hard to know which one has better quality.</li>
                            <li className="p1">Often miscounting the among of ingredients.</li>
                            <li className="p1">Is not easy to find if I do not have an idea before searching.</li>
                            <li className="p1">The interface looks "not appetite". </li>
                            <li className="p1">Some functions are hard to find if no one tells me first.</li>
                        </ol>
                        <div className="row d-flex research-img">
                            <img className="col-6" src="images/project/painpoint.jpg" alt="painpoint1" />
                            <img className="col-6" src="images/project/painpoint2.jpg" alt="painpoint2" />
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className=" workH journeyPic">
                        <h3>User Journey</h3>
                        <p className="p1">I delved into users' emotions and behaviors during their cooking, pinpointing sources of annoyance. Afterward, I sought feedback about whether some modifications or additions would enhance their experience.</p>
                        <img className="col-10 d-flex" src="images/project/journey.jpg" alt="User journey" />
                    </div>
                    <hr className="hr" />
                    <div className="row workH col-12">
                        <h3 className="underline">02 Design</h3>
                        <div className="functionalMap d-flex ">
                            <div className="col-5">
                                <h3 className="myRole">Functional map</h3>
                                <p className="p1">Afterward, I transformed the findings into a functional map. This is extremely helpful in determining the placement of information on each page, defining functionality, and ensuring user-centered design.</p>
                            </div>
                            <div className="functionalMap-img col-6">
                                <img className="" src="images/project/Functionalmap.jpg" alt="Functional map" />
                            </div>
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row workH col-12">
                        <div className="row work-result workH col-12">
                            <h3 className="">Wireframes and Prototype</h3>
                            <div className="wireframe-img">
                                <img className="col-10" src="images/project/wireframe.jpg" alt="wireframes" />
                            </div>
                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="row work-result col-12">
                        <div className="work-result-text workH">
                            <h3 className="underline">03 Final Prototype</h3>
                            <div className="wireframe-img">
                                <img className="col-10" src="images/project/cookbook-mocup.png" alt="cookbook features" />
                            </div>
                            <h1 className="reachout">Interesting  of more details? Please feel free to reach out :)</h1>
                            <div className="wireframe-img">
                                <img className="col-10" src="images/project/cookbook-mocop-1.png" alt="cookbook design" />
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