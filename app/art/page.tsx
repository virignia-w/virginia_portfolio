import Header from "../components/header";
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Page() {
    return <>
        <div id="container-fluid wrapper m-0 p-0 gx-0">
            <div className="row ">
                <div className="col-12" id="myHeader">
                    <Header />
                </div>
            </div>


            <div className="container-all">
                <div className="row d-flex">
                    <div className="gallery">
                        <img src="images/art/peacock.jpg" alt="Peacock" />
                        <img src="images/art/cat.jpg" alt="Cat" />
                        <img src="images/art/fruit.jpg" alt="Fruit" />
                        <img id="tiger" src="images/art/tiger.jpg" alt="Tiger" />
                        <img src="images/art/wolf.jpg" alt="Wolf" />
                        <div className="gallery-text text-center">By Colour Pencils</div>
                        <img src="images/art/owl.jpg" alt="Owl" />
                        
                    </div>
                </div>
            </div>
            <footer className="container-fluid text-center ">
                <p>&copy 2024 Virignia Wang</p>
            </footer>
        </div >
    </>
}

