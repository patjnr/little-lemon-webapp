import Card from "./Card";
import "./Testimonials.css";
import olivia from "../../assets/img/tilly.png";
import jackson from "../../assets/img/samuel.jpeg";
import sophia from "../../assets/img/emma.jpg";
import liam from "../../assets/img/ted.jpg";

const Testimonials = () => {
    const CardsInfo = [
        {
            img: olivia,
            name: "Olivia",
            comment: "The service was impeccable, and the food was divine!",
        },
        {
            img: jackson,
            name: "Jackson",
            comment: "A perfect blend of flavors, will definitely return.",
        },
        {
            img: sophia,
            name: "Sophia",
            comment: "The ambiance and taste are unmatched—worth every penny.",
        },
        {
            img: liam,
            name: "Liam",
            comment: "An extraordinary culinary journey, loved it!",
        },
    ];
    return (
        <section className="testimonials-frame">
            <div className="testimonials">
                <div className="frame">
                    <h2>Testimonials</h2>
                    <div className="testimonials-container">
                        <Card cardinfo={CardsInfo[0]}/>
                        <Card cardinfo={CardsInfo[1]}/>
                        <Card cardinfo={CardsInfo[2]}/>
                        <Card cardinfo={CardsInfo[3]}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
