import resumeIcon from '/socials/resume-icon.svg'


const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <span className="name">Hello, I'm Eric!</span>
                <br />
                <span className="address">Plaridel, Bulacan</span>
                <br />
                <p className="info">
                    Senior year BSIT college student at <span>National University Bulacan</span>
                </p>
                <br />
                <div className="home-button-wrapper">
                    <div className="home-btn">
                        <img src={resumeIcon} alt="" height={24} width={24} />
                        Resume
                    </div>
                    <a href="#contacts">
                        <div className="home-btn">
                            Contact Me!
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero