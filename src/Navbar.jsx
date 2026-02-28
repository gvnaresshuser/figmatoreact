import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Swal from "sweetalert2";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const showToast = (message) => {
        const isMobile = window.innerWidth <= 768;
        Swal.fire({
            toast: true,
            position: isMobile ? "bottom" : "top-bottom",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            background: "#fff",
            /* background: "url('./assets/aerial-bg.jpg') center / cover no-repeat", */
            color: "green",
        });
    };

    return (
        <div className="navbar">
        
            <div className="nav-container">

                {/* Logo / Title (optional) */}
                {/*  <div className="nav-logo">Travel</div> */}

                {/* Desktop Menu */}
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <div onClick={() => showToast("Home Clicked")}>Home</div>
                    <div onClick={() => showToast("About Us Clicked")}>AboutUs</div>
                    <div onClick={() => showToast("Premium Clicked")}>Premium</div>
                    <div onClick={() => showToast("Blogs Clicked")}>Blogs</div>
                    <div className="explore" onClick={() => showToast("Explore Clicked")}>
                        Explore
                    </div>
                </div>

                {/* Hamburger Icon */}
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    );
}

export default Navbar;