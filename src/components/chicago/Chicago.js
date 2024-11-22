import "./Chicago.css";
import imga from "../../assets/img/Mario and Adrian A.jpg";
import imgb from "../../assets/img/Mario and Adrian b.jpg";

const Chicago = () => {
    return (
        <section className="chicago-container" id="about">
            <article className="chicago">
                <article className="chicago-text">
                    <div id="text-limiter">
                        <h1>Little Lemon</h1>
                        <h2>New York</h2>
                        <p>
                            New York City is the most populous city in the United States. It
                            is located in the state of New York. Known as "The Big Apple," New
                            York is famous for its landmarks, including the Statue of Liberty,
                            Times Square, and Central Park. The city is a global hub for
                            finance, culture, and entertainment, boasting iconic institutions
                            like Broadway theaters, the Metropolitan Museum of Art, and Wall
                            Street. New York is also home to renowned sports teams, such as
                            the New York Yankees and the New York Knicks. With its vibrant
                            neighborhoods, diverse culinary scene, and unparalleled skyline,
                            New York is a city that truly never sleeps.
                        </p>
                    </div>
                </article>
                <div className="chicago-images">
                    <img id="img-a" src={imga} alt="Chicago"/>
                    <img id="img-b" src={imgb} alt="Chicago"/>
                </div>
            </article>
        </section>
    );
};

export default Chicago;
