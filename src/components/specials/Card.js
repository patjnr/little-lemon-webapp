import bike from "../../assets/img/bike.svg";
import "./Card.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.cardinfo.img} alt={props.cardinfo.title}/>
            <div className="card-content">
                <div className="title-price">
                    <h4>{props.cardinfo.title}</h4>
                    <p className="highlight">{props.cardinfo.price}</p>
                </div>
                <p className="description">{props.cardinfo.description}</p>
                <div className="order-line">
                    <h4>Order a delivery</h4>
                    <span>
            <img id="bike" src={bike} alt="fast delivery"/>
          </span>
                </div>
            </div>
        </div>
    );
};
export default Card;
