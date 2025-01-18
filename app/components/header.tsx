"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import logo from "../public/LOGO.png"



export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // function directToLoginPage() {
        if (pathname === "/") {
            router.replace("/home");
        }
    }, [pathname]);


    return <>
        <nav className="navbar navbar-expand-lg mb-0">
            <div className="container-fluid">

                <a className="navbar-brand" href="/home"> 
                <Image className="logo" src={logo} style={{ width: 70, height: 45 }} alt="logo" /> 
                </a>
                <button className="navbar-toggler collapseB" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navC" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link nav-link active" aria-current="page" href="/home">Home</a>
                        <a className="nav-link nav-link active" aria-current="page" href="/project">Project</a>
                        <a className="nav-link nav-link active" aria-current="page" href="/about">About Me</a>
                        <a className="nav-link nav-link active" aria-current="page" href="/about#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

    </>
}