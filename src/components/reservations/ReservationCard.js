import "./Reservations.css";

const ReservationCard = ({
                             reservation,
                             reservations,
                             setReservations,
                             handleEdit,
                         }) => {
    return (
        <article className="reservation-card">
            <h2>
                {reservation.date +
                    " " +
                    reservation.time +
                    ", " +
                    reservation.table.name}
            </h2>
            <div className="res-content">
                <h3>{reservation.name}</h3>
                <h4>
                    {reservation.diners} diners, {reservation.occasion}
                </h4>
                <h4>{reservation.specialRequests}</h4>
            </div>
            <div className="button-container">
                <button
                    className="btn edit"
                    onClick={() => {
                        handleEdit(reservation);
                    }}
                >
                    <h4>Edit</h4>
                </button>
                <button
                    className="btn delete"
                    onClick={() => {
                        setReservations(
                            reservations.filter((res) => res.id !== reservation.id)
                        );
                    }}
                >
                    <h4>Delete</h4>
                </button>
            </div>
        </article>
    );
};

export default ReservationCard;
