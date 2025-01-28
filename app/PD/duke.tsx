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

            <div className="container-all">
                <div className="col-2 container p-0 m-0 d-flex">
                    <div className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
                        <button className="backB">
                            <IoIosArrowBack />
                            <p>Back to Menun</p>
                        </button>
                    </div>
                </div>
                <div className="container allContent col-10 ">
                    <div className="row col-12 workHead-card">
                        <p className="p1">UX Product Design Work Project</p>
                        <h1>How I Reviving the Legend- Duke125</h1>
                        <h2>Used UX Strategy to Revive a Dying Product.</h2>
                    </div>
                    <div className="row work-mainPic">
                        <img src="images/project/.png" alt="PDdisplay" />
                    </div>
                    <hr className="hr" />
                    <div className="row p-0 ms-0 work-objective col-12">

                        <div className="date col-5 text-center">

                            <h1 className="align-top">DATE</h1>
                            <h3 className="date-text ">December 2019</h3>
                        </div>
                        <div className="vr"></div>
                        <div className="role col-5 text-center ">
                            <h1 className="align-top">ROLE</h1>
                            <h3 className="date-text">UX researcher</h3>
                            <h3 className="date-text">&</h3>
                            <h3 className="date-text">Product designer</h3>
                        </div>

                    </div>
                    <hr className="hr" />
                    <div className="row p-0 ms-0 work-bcg col-12">
                        <div className="work-bcg-text">
                            <h1 className="work-titlt-text">Introduction/Background</h1>
                            <p className="p1">This project was one of my responsibilities as a product designer at a motor company.</p>
                            <p className="p1">As a Taiwanese, the "Duke" motorcycle series has been an iconic name that we've known our entire lives. "Duke" was a very popular scooter during the '90s. It's been a legend for the scooter market for around 15 years.</p>
                            <p className="p1">In 2017, our company decided to launch a new scooter under the "Duke" name, hoping it would recapture the success of the original. However, the 2017 model shared only the name and none of the essence of its predecessor. As a lifelong fan of the original Duke, it was disheartening to see the name attached to a product so different from its roots.</p>
                            <p className="p1">The 2017 model struggled to gain a positive reputation. Most customers purchased it solely for its affordability, not its quality or features. By 2020, the scooter was falling behind its competitors, and its product life cycle was nearing its end. It was clear that change was needed.</p>
                        </div>

                        <div id="carouselExampleFade" className="carousel slide carousel-fade backgroundCarousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/project/PD.png" className="d-block w-100 work-bcg-img" alt="PD page" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/project/PDwork.png" className="d-block w-100 work-bcg-img" alt="PD page" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                        <h1>Research About the Market</h1>
                        <p className="p1">To gain a deeper understanding of the market and the product, I examined the history of the Duke series, the market dynamics of the 1990-2010 period, and the current market landscape.</p>
                        <div className="row work-research col-12">
                            <div className="researchH col-5">
                                <h3>01 The current market</h3>
                                <p className="p1">I analyzed the sales data for the entire under-250cc scooter market (the next-level license category) to demonstrate to the C-level executives the size and importance of the 125cc market. I highlighted why it was essential to continue supporting this segment and, most importantly, why the 2017 Duke needed an upgrade and redesign.</p>
                                <div className="work-research-img col-7">
                                    <img src="images/project/.png" />
                                </div>
                                <p className="p1">In the under-250cc market, the 125cc segment represents the majority. Within this segment, the largest sales category, which we refer to as the "normal" class, includes the Duke. This class holds the biggest market share—almost half of the entire 125cc market.</p>
                                <div className="work-research-img col-7">
                                    <img src="images/project/.png" />
                                </div>
                                <p className="p1">The "normal" class targets male users aged 36-55 who rely on scooters for daily commuting. When purchasing a scooter, they prioritize affordability over style or advanced features.</p>
                            </div>
                        </div>
                        <hr className="hr-2" />
                        {/* <div className="row work-research-role col-12">
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
                        </div> */}
                        <div className="row work-design col-12">
                            <div className="work-design researchH ">
                                <h3>02 Competitors analyse</h3>
                            </div>
                            <div className="work-design-text">
                                <p className="p1 col-6">I compared the sales data of our products with those of our competitors. Both we and our main competitor had launched two models in this segment, and this is where I DISCOVERED SOMETHING NEW!</p>
                                {/* <div id="carouselExampleFade" className="carousel slide carousel-fade backgroundCarousel col-6 ">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="images/project/LOFIdis3.jpg" className="d-block w-100 work-bcg-img" alt="Lofi wireframe" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="images/project/LOFIdis4.png" className="d-block w-100 work-bcg-img" alt="Lofi wireframe" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <hr className="hr-2" />
                        {/* <div className="row work-research-role col-12">
                            <div className="col-3">
                                <h3 className="myRole">My Role</h3>
                            </div>
                            <div className="col-9">
                                <p className="p1 myRole">I took the lead in creating the initial sketches, provided the primary design concept, and was responsible for building the high-fidelity wireframe and prototype.</p>
                            </div>
                        </div> */}
                        <hr className="hr-2" />
                        <div className="row work-result col-12">
                            <div className="work-result-text researchH">
                                <h3 className="">03 Breakpoint</h3>
                                <h3 className="myRole">New Insight I discovered</h3>
                                <p className="p1">Previously, it was widely assumed that although the two models differed in size, they shared the same target users, with customers simply choosing the better deal or selecting based on physical size preferences. However, after a detailed analysis of user demographics, purchasing behavior, and preferences, I discovered that the larger model actually appeals more to younger users and has a significantly higher proportion of male buyers compared to female buyers.</p>
                                <div className="work-result-img">
                                    <img className="col-6" src="images/project/.png" alt="dispaly board" />
                                </div>
                                <p className="p1">Therefore, the design of the larger model could adopt a sharper and sportier style. We can also expect its users to be more knowledgeable about scooters and to resonate more deeply with the legacy of the original Duke.</p>
                            </div>

                        </div>
                        <hr className="hr" />
                        <div className="row work-result col-12">
                            <div className="work-result-text researchH">
                                <h3 className="">04 Story of Duke and the company</h3>
                                <p className="p1">The first Duke, Duke I 150, debuted in 1990, featuring a cutting-edge engine and an original racing-inspired design. It quickly took the market by storm, becoming the most popular scooter among young riders aged 18 to 30.</p>
                                <p className="p1">Now, let's do some simple math, 'Duke' is the dream scooter for teenagers and young boys in the 90's, after 30 years now, how old are those youth in the 2020s? Exactly the age of our New Duke's target- 36 ups.</p>
                                <div className="work-result-img">
                                    <img className="col-6" src="images/project/.png" alt="dispaly board" />
                                </div>
                                <p className="p1">Another historical fact is that our company began to decline around 2010, eventually hitting rock bottom. Once the leading motor brand, we fell to third place, alongside other small startups. Despite significant efforts to boost sales, it has been a long time since shareholders and veteran employees saw our market share exceed 20%. While the memories of our former glory remain vivid in their minds, that era has come to an end.
                                    Therefore, let me show you how I brought back the golden age and revived their dreams with the all-new Duke 2022.</p>
                                <h1 className="">Reviving the Classic, Reclaiming the Peak.</h1>
                            </div>
                            <div className="row d-flex research-img">
                                <div className="tAContainer">
                                    <h4>WHO</h4>
                                    <p>- Males aged 36-55, possibly with families
                                        - Value affordability, safety, and practicality over style or advanced features
                                        - Prefer simple functionality without unnecessary complexity
                                        - Typically use a scooter for an average of 10-13 years (70% use it for over 10 years) </p>
                                </div>
                                <div className="tAContainer">
                                    <h4>WHAT</h4>
                                    <p>- High value for money (great cost-performance ratio)
                                        - A large luggage box for practicality
                                        - Fuel efficiency
                                        - Durability, as they tend to use scooters for a long time

                                        Style Preferences
                                        Major: 1. Streamlined 2. Simple
                                        Minor: 2. Technology 3.Speed </p>
                                </div>
                                <div className="tAContainer">
                                    <h4>WHY</h4>
                                    <p>- For daily commuting, such as traveling to and from work
                                       - To support everyday activities (ex, picking up and dropping off family members or running errands)</p>
                                </div>
                            </div>
                        </div>
                        <div className="row work-proto col-12">
                            <h1>Design</h1>
                            <p>1st Round</p>
                            <p className="p1">We tried to draw inspiration from the classic Duke, aiming for a design as similar as possible. However, it didn't work out because the laws and equipment requirements had changed since then.</p>
                            <p>2nd Round</p>
                            <p className="p1">We attempt involved using an SUV as inspiration due to the similarities in target audiences and development history. Unfortunately, this approach also failed, as the body design requirements for cars and motorcycles are too different.</p>
                            <p>3rd Round</p>
                            <p className="p1">I decided to focus on the key features of the classic Dukes, blending them with a fresh design style. The result was a new version of the classic Duke!</p>
                            <img />
                        </div>
                        <div className="row work-proto col-12">
                            <h1>Result</h1>

                            <p className="p1">
                                1.Duke 2022 has gained a high reputation and positive feedback from both the market and customers.
                                2.Achieved 7,000-8,000 units/month in sales: Previously, a strong-selling scooter in the "normal" segment would reach around 4,000-5,000 units per month. However, the New Duke reached 9,000 units in its third month post-launch and maintained 7,000-8,000 units per month for six months.
                                3.Our company regained the leading brand position, securing over 40% of the market share after 20 years.
                                4.For the first time in the company's 60-year history, a single model became the top seller in the entire scooter market in its debut month.
                            </p>

                            <img className="col-6" src="images/project/.png" alt="dispaly board" />

                        </div>

                        <div className="row work-reach col-12">
                            <div className="col-7 reachout">
                                <h1>Reach out if you're interesting of more details</h1>
                            </div>
                            <div className="col-5 contactBCon">
                                <div><IoMail className="emailB" />ning93315@gmail.com
                                </div>
                                <div>
                                    <FaLinkedin className="linkedinB" />
                                    <FaInstagram className="instagramB" />
                                    <FaBehance className="behanceB" />
                                </div>
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