import resumeIcon from '/socials/resume-icon.svg'


const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <span className="name">Hello, I'm Eric Samuel Salvador!</span>
                <br />
                <span className="address">Plaridel, Bulacan</span>
                <br />
                <p className="info">
                    Senior year BSIT college student at <span>National University Bulacan</span>
                </p>
                <br />
                <div className="home-button-wrapper">
                    <a href="https://drive.google.com/file/d/1timq96v9nz3DaIZDh2Iz6USCYDcMSlyn/view?usp=sharing"  target='_blank'>
                        <div className="home-btn">
                            <img src={resumeIcon} alt="" height={24} width={24} />
                            Resume
                        </div>
                    </a>
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