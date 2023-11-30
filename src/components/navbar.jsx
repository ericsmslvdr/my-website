import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="logo">
                <a href="#home">&lt;<span>ericsmslvdr</span>&#47;&gt;</a>
            </div>
            <div className="menu-bar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contacts">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar