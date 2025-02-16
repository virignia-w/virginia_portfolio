import React from 'react';


export default function Sidenav() {
    return <>
        <div id="sideBar" className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
            <ul className="sidebar-option">
                <a className="nav-link nav-link active sidebarItem" aria-current="page"  href="/about#experience">Experiencen</a>
        
                <a className="nav-link nav-link active" aria-current="page"  href="/about#skill">Skills</a>
          
                <a className="nav-link nav-link active" aria-current="page"  href="/about#education">Education</a>
         
                <a className="nav-link nav-link active" aria-current="page"  href="/about#contact">Contact</a>
            </ul>
        </div>
    </>
}