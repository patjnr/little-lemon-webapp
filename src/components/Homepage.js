import Chicago from "./chicago/Chicago";
import CallToAction from "./hero/CallToAction";
import Specials from "./specials/Specials";
import Testimonials from "./testimonials/Testimonials";

const Homepage = () => {
    return (
        <>
            <CallToAction/>
            <Specials/>
            <Testimonials/>
            <Chicago/>
        </>
    );
};

export default Homepage;
