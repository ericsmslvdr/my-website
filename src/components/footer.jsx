
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="socmed">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/ericsamsalvador" target="_blank">FACEBOOK</a>
                    </li>
                    <li>
                        <a href="https://github.com/ericsslvdr" target="_blank">GITHUB</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ericssalvador/" target="_blank">LINKEDIN</a>
                    </li>
                </ul>
            </div>
            <p>
                &copy;
                {currentYear}
                Eric Samuel Salvador
            </p>
        </footer>
    )
}

export default Footer