import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";



function Footer() {
    return (
            <div id="footer" className="footer-div">
                <footer>
                <ul>
                    <a href="www.linkedin.com/in/tanner-b-62b90a222" target="blank">
                    <li>
                        <FaLinkedin />
                    </li>
                    </a>
                    <a href="https://github.com/TannerReed29" target="blank">
                        <li>
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://discord.gg/upperhand" target="blank">
                        <li>
                            <FaDiscord />
                        </li>
                    </a>
                </ul>
                <div className="container">&copy;2022 by Tanner Brieger for UpperHand Gaming</div>
            </footer>
            </div>
    );
};


export default Footer;