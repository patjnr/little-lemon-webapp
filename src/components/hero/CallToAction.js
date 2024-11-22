import {Link} from "react-router-dom";
import logo from "../../assets/img/restauranfood.jpg";
import "./CallToAction.css";

export default function CallToAction() {
    return (
        <section id="CallToAction">
            <article id="text-container">
                {/* <img
          id="hero-img-small"
          className="img-small-visible"
          src={logo}
          alt="restaurant food"
          height={395}
          width={420}
        /> */}
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="highlight">
                    We are a family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <Link aria-label="button" to="/booking" className="reserve-button">
                    <h4>Book a table</h4>
                </Link>
            </article>
            <img
                id="hero-img"
                className="img-big-visible"
                src={logo}
                alt="restaurant food"
                height={395}
                width={420}
            />
        </section>
    );
}
