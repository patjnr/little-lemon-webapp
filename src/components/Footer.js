import footerLogo from "../assets/img/footerlogo.png";

export default function Footer() {
    return (
        <footer id="Footer">
            <menu className="footer-container">
                <img id="img-footer" src={footerLogo} alt="footer logo"/>

                <menu className="footer">
                    <h3>COMPANY</h3>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/order">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </menu>
                <menu className="footer">
                    <h3>SUPPORT</h3>
                    <br className="br"/>
                    <li>
                        <a href="https://www.facebook.com">Adress</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">Phone number</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">Email</a>
                    </li>
                </menu>
                <menu className="footer">
                    <h3>SOCIAL MEDIA LINKS</h3>
                    <br className="br"/>
                    <li>
                        <a href="https://www.facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com">Linkedin</a>
                    </li>
                    <br/>
                </menu>
            </menu>
            © 2024 Little Lemon
        </footer>
    );
}
