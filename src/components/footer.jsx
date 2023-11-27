import facebookIcon from "/socials/facebook-icon.svg"
import githubIcon from "/socials/github-icon.svg"
import linkedinIcon from "/socials/linkedin-icon.svg"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="socmed">
                <a href="https://www.facebook.com/ericsmslvdr/" target="_blank">
                    <img src={facebookIcon} alt="" height={30} width={30} />
                </a>
                <a href="https://github.com/ericsmslvdr" target="_blank">
                    <img src={githubIcon} alt="" height={34} width={34} />
                </a>
                <a href="https://www.linkedin.com/in/ericsmsalvador/" target="_blank">
                    <img src={linkedinIcon} alt="" height={30} width={30} />
                </a>
            </div>
            <p>
                {currentYear}
                &nbsp;
                &copy;
                Eric Samuel Salvador
            </p>
        </footer>
    )
}

export default Footer