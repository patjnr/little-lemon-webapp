import "./Specials.css";
import Card from "./Card";
import foodImg_greekSalad from "../../assets/img/greek salad.jpg";
import foodImg_brucheta from "../../assets/img/bruchetta.svg";
import foodImg_lemonDessert from "../../assets/img/lemon dessert.jpg";

const Specials = () => {
    const CardsInfo = [
        {
            id: 1,
            img: foodImg_greekSalad,
            title: "Greek Salad",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            price: "$" + 12.99,
        },
        {
            id: 2,
            img: foodImg_brucheta,
            title: "Brucheta",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and drizzled with extra-virgin olive oil. Topped with fresh, juicy tomatoes, aromatic basil, and a sprinkle of sea salt.",
            price: "$" + 5.99,
        },
        {
            id: 3,
            img: foodImg_lemonDessert,
            title: "Lemon Dessert",
            description:
                "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: "$5.00",
        },
    ];
    return (
        <section className="specials" id="menu">
            <div className="frame">
                <div className="specials-header">
                    <h1>This weeks menu!</h1>
                    <button>
                        <h4>Online Menu</h4>
                    </button>
                </div>
                <div className="cards-container">
                    {CardsInfo.map((card) => {
                        return <Card cardinfo={card} key={card.id}/>;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Specials;
