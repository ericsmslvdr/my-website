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
            <div className="logo"><a href="#home">&lt;&#47;&gt; Eric Samuel Salvador</a></div>
            <div className="menu-bar">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contacts">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar