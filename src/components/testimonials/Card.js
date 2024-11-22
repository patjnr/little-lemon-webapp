import quotes from "../../assets/img/quotes-svgrepo-com (1).png";

import "./Card.css";

const Card = (props) => {
    return (
        <div className="card-testimonials">
            <h3>★★★★★</h3>
            <div className="card-content-testimonials">
                <div className="title-img">
                    <img src={props.cardinfo.img} alt={props.cardinfo.title}/>
                    <h4>{props.cardinfo.name}</h4>
                </div>
                <div className="quo-comment">
                    <img id="quotes" src={quotes} alt="quotes"/>
                    <p className="comment">{props.cardinfo.comment}</p>
                </div>
            </div>
        </div>
    );
};
export default Card;
