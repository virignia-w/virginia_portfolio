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
                            <li className="breadcrumb-item active" aria-current="page">How I Reviving the Legend- Duke125</li>
                        </ol>
                    </nav>
                </div>
                <div className="row col-12 workHead-card">
                    <p className="p1">UX Product Design Work Project</p>
                    <h1>How I Reviving the Legend- Duke125</h1>
                    <h2>Used UX Strategy to Revive a Dying Product.</h2>
                </div>
                <div className="row work-mainPic">
                    <img src="images/project/duke.jpg" alt="PDdisplay" />
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
                    <div className="bcg-test">
                        <div className="work-bcg-text">
                            <h1 className="work-titlt-text">Introduction/Background</h1>
                            <p className="p1 padding">This project was one of my responsibilities as a product designer at a motor company.<br></br>
                                <br></br>As a Taiwanese, <strong>the "Duke" motorcycle series has been an iconic name</strong> that we've known our entire lives. "Duke" <strong>was a very popular scooter during the '90s.</strong> It's been a legend for the scooter market for around 15 years.<br></br>
                                <br></br>
                                <strong>In 2017,</strong> our company decided to launch a <strong>new scooter under the "Duke" name</strong> hoping it would recapture the success of the original. However, the 2017 model shared <strong>only the name and none of the essence of its predecessor.</strong> As a lifelong fan of the original Duke, it was disheartening to see the name attached to a product so different from its roots.<br></br>
                                <br></br>The 2017 model <strong>struggled to gain a positive reputation.</strong> Most customers purchased it solely for its affordability, not its quality or features. By 2020, the scooter was <strong>falling behind its competitors, and its product life cycle was nearing its end.</strong> It was clear that change was needed. <br></br> <br></br></p>
                        </div>

                        <div className="row col-12 oldPicCon">
                            <div className="duke-goPic col-6 mx-auto col-md d-block">
                                <img src="images/project/duke-go.png" className="d-block work-bcg-img" alt="duke's plan" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row p-0 ms-0 work-section work-bcg-text col-12">
                    <h1>Research About the Market</h1>
                    <p className="p1">To gain a deeper understanding of the market and the product, I examined the history of the Duke series, the market dynamics of the 1990-2010 period, and the current market landscape.</p>
                    <div className="row work-research col-12">
                        <div className="workH">
                            <h3 className="underline">01 The current market</h3>
                            <p className="p1">I <strong>analyzed the sales data for the entire under-250cc scooter market (the next-level license category)</strong> to demonstrate to the C-level executives the size and importance of the 125cc market. I highlighted <strong>why it was essential to continue supporting this segment and, most importantly, why the 2017 Duke needed an upgrade and redesign.</strong></p>
                            <div className="duke-research-img col-10 mx-auto col-md d-block">
                                <img src="images/project/125-market-1.jpg" />
                            </div>
                            <p className="p1">In the under-250cc market, <strong>the 125cc segment represents the majority</strong>. Within this segment, the <strong>largest sales category</strong>, which we refer to as the <strong>"normal" class</strong>, includes the Duke. This class holds the biggest market share—almost half of the entire 125cc market.</p>
                            <div className="duke-research-img col-10 mx-auto col-md d-block">
                                <img src="images/project/125-market-2.jpg" />
                            </div>
                            <p className="p1">The <strong>"normal" class targets male users aged 36-55</strong> who rely on scooters for <strong>daily commuting</strong>. When purchasing a scooter, they <strong>prioritize affordability over style or advanced features.</strong></p>
                        </div>
                    </div>

                    <div className="row work-research col-12">
                        <div className="work-design workH bcg-test">
                            <h3 className="underline">02 Competitors analyse</h3>
                            <p className="p1 col-12">I <strong>compared the sales data</strong> of our products with those of our competitors. Both we and our main competitor had launched two models in this segment, and this is where <strong>I DISCOVERED SOMETHING NEW!</strong></p>
                        </div>
                    </div>
                    <div className="row work-result col-12">
                        <div className="work-design workH ">
                            <h3 className="underline">03 Breakpoint</h3>
                            <h3 id="newInsight">New Insight I discovered</h3>
                            <p className="p1"><strong>Previously</strong>, it was widely assumed that although <strong>the two models</strong> differed in size, they <strong>shared the same target users</strong>, with customers simply choosing the better deal or selecting based on physical size preferences. However, <strong>after a detailed analysis</strong> of user demographics, purchasing behavior, and preferences, I discovered that the <strong>larger model actually appeals more to younger users and has a significantly higher proportion of male buyers</strong> compared to female buyers.</p>
                            <div className="duke-history-img">
                                <img className="col-10" src="images/project/125-market-3.jpg" alt="Noraml buyers analyse" />
                            </div>
                            <p className="p1">Therefore, the design of the <strong>larger model could adopt a sharper and sportier style.</strong> We can also expect its users to be <strong>more knowledgeable about scooters and to resonate more deeply with the legacy of the original Duke.</strong></p>
                        </div>
                    </div>
                    <hr className="hr-2" />

                    <div className="row work-result col-12">
                        <div className="work-result-text workH ">
                            <h3 className="underline">04 Story of Duke and the company</h3>
                            <p className="p1"><strong>The first Duke</strong>, Duke I 150, debuted in 1990, featuring a <strong>cutting-edge engine and an original racing-inspired design</strong>. It quickly <strong>took the market by storm, becoming the most popular scooter</strong> among <strong>young riders aged 18 to 30.</strong></p>
                            <p className="p1">Now, let's do some simple math, 'Duke' is the dream scooter for teenagers and young boys in the 90's, after 30 years now, how old are those youth in the 2020s? Exactly <strong>the age of our New Duke's target- 36 ups.</strong></p>
                            <div className="duke-history-img">
                                <img className="col-10" src="images/project/125-market-4.jpg" alt="Duke's history" />
                            </div>
                            <p className="p1">Another historical fact is that our company began to decline around 2010, eventually hitting rock bottom. <strong>Once the leading motor brand, we fell to third place,</strong> alongside other small startups. Despite significant efforts to boost sales, it has been a long time since shareholders and veteran employees saw our market share exceed 20%. While the memories of our former glory remain vivid in their minds, that era has come to an end.
                                Therefore, let me show you <strong>how I brought back the golden age and revived their dreams with the all-new Duke 2022.</strong></p>

                        </div>
                        <div className="row clo-8 d-flex sloganCon">
                            <h1 className="slogan text-center">Reviving the Classic, Reclaiming the Peak.</h1>
                        </div>
                        {/* <hr className="hr" /> */}
                        <div className="row col-12 d-flex tAContainer">
                            <div className="tAContent col-4">
                                <h4>WHO</h4>
                                <ul><li className="p1">Males aged 36-55, possibly with families</li>
                                    <li className="p1">Value affordability, safety, and practicality over style or advanced features</li>
                                    <li className="p1">Prefer simple functionality without unnecessary complexity</li>
                                    <li className="p1">Typically use a scooter for an average of 10-13 years (70% use it for over 10 years)</li>
                                </ul>
                            </div>
                            <div className="tAContent col-4">
                                <h4>WHAT</h4>
                                <ul>
                                    <li className="p1">High value for money (great cost-performance ratio)</li>
                                    <li className="p1">A large luggage box for practicality</li>
                                    <li className="p1">Fuel efficiency</li>
                                    <li className="p1">Durability, as they tend to use scooters for a long time</li>

                                    <li className="p1">Style Preferences<br></br>
                                        Major: <ol className="p1">1. Streamlined</ol> <ol className="p1">2. Simple</ol><br></br>
                                        Minor: <ol className="p1"> 3. Technology</ol> <ol className="p1"> 4. Speed</ol></li>
                                </ul>
                            </div>
                            <div className="tAContent col-4">
                                <h4>WHY</h4>
                                <ul><li className="p1">For daily commuting, such as traveling to and from work</li>
                                    <li className="p1">To support everyday activities (ex, picking up and dropping off family members or running errands)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row p-0 ms-0 work-section duke-bcg-text col-12 bcg-test ">
                        <div className="work-result-text workH ">
                            <div className="bcg-test">
                                <h1>Design</h1>
                                <h4 className="duke-design d-flex">1st Round</h4>
                                <p className="p1 p-2">We tried to draw inspiration from the classic Duke, aiming for a design as similar as possible. However, it didn't work out because the laws and equipment requirements had changed since then.</p>
                                <h4 className="duke-design d-flex">2nd Round</h4>
                                <p className="p1 p-2">We attempt involved using an SUV as inspiration due to the similarities in target audiences and development history. Unfortunately, this approach also failed, as the body design requirements for cars and motorcycles are too different.</p>
                                <h4 className="duke-design d-flex">3rd Round</h4>
                                <p className="p1 -2">I decided to focus on the key features of the classic Dukes, blending them with a fresh design style. The result was a new version of the classic Duke!</p>
                                <img />
                                <div className="duke-history-img">
                                    <img className="col-10" src="images/project/duke-design-03.png" alt="Design round 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-0 ms-0 work-section duke-bcg-text col-12">
                        <div className="work-result-text workH ">
                            <h1>Result</h1>
                            <ol className="duke-result">
                                <li className="p1">Duke 2022 has gained a high reputation and positive feedback from both the market and customers.</li>
                                <li className="p1"><strong>Achieved 7,000-8,000 units/month in sales:</strong> Previously, a strong-selling scooter in the "normal" segment would reach around 4,000-5,000 units per month. However, the New Duke reached 9,000 units in its third month post-launch and maintained 7,000-8,000 units per month for six months.</li>
                                <li className="p1">Our company regained the <strong>leading brand position</strong>, securing over <strong>40% of the market share</strong> after 20 years.</li>
                                <li className="p1">For the first time in the company's 60-year history, a single model became the <strong>top seller</strong> in the entire scooter market in its debut month.</li>
                            </ol>
                            <div className="duke-history-img">
                                <img className="col-10" src="images/project/duke-result.jpg" alt="Duke result" />
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
        </div >
    </>
}