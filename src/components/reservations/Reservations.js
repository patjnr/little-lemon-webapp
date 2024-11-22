import ReservationCard from "./ReservationCard";
import "./Reservations.css";
import {Fragment} from "react";
import {Link} from "react-router-dom";

const Reservations = (props) => {
    const reservations = props.reservations;
    const setReservations = props.setReservations;
    const handleEdit = props.handleEdit;

    return (
        <>
            <h1 id="reservation-header">Reservations</h1>
            <Link
                role="button"
                id="reserve-button-reservations-page"
                to="/booking"
                className="reserve-button"
            >
                <h4>Reserve a table</h4>
            </Link>
            <section className="reservations">
                {reservations.map((reservation) => (
                    <Fragment key={reservation.id}>
                        <ReservationCard
                            key={reservation.id + 100}
                            reservation={reservation}
                            reservations={reservations}
                            setReservations={setReservations}
                            handleEdit={handleEdit}
                        />
                    </Fragment>
                ))}
            </section>
        </>
    );
};

export default Reservations;
