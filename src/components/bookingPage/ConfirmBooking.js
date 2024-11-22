import {useNavigate} from "react-router-dom";
import "./ConfirmBooking.css";
import {useLoading} from "../../context/loadingContext";

const ConfirmBooking = (props) => {
    const {toggleLoading} = useLoading();
    const navigate = useNavigate();
    const handleClose = () => {
        toggleLoading();
        setTimeout(() => {
            toggleLoading();
        }, 2000);
        props.setIsModalOpen(false);
        navigate("/reservations");
    };
    return (
        <>
            {props.isConfirmed && (
                <aside className="modal">
                    <div className="confirm-container">
                        <h2>Booking Confirmed</h2>
                        <button className="confirm" onClick={handleClose}>
                            <h4>Close</h4>
                        </button>
                    </div>
                </aside>
            )}
            {!props.isConfirmed && (
                <aside className="modal">
                    <div className="confirm-container">
                        <h2>Confirm Booking</h2>
                        <h4>Name</h4>
                        <p>{props.form.name}</p>

                        <h4>Email</h4>
                        <p>{props.form.email}</p>

                        <h4>Phone</h4>
                        <p>{props.form.phone}</p>

                        <h4>Date</h4>
                        <p>{props.form.date}</p>

                        <h4>Time</h4>
                        <p>{props.form.time}</p>

                        <h4>Diners</h4>
                        <p>{props.form.diners}</p>

                        <h4>Occasion</h4>
                        <p>{props.form.occasion}</p>

                        <h4>Table</h4>
                        <p>{props.form.table.name}</p>

                        <h4>Special Requests</h4>
                        <p>
                            {props.form.specialRequests === ""
                                ? "None"
                                : props.form.specialRequests}
                        </p>

                        <button className="confirm" onClick={props.onConfirm}>
                            <h4>Confirm</h4>
                        </button>
                        <button className="cancel" onClick={props.onCancel}>
                            <h4>Cancel</h4>
                        </button>
                    </div>
                </aside>
            )}
        </>
    );
};

export default ConfirmBooking;
