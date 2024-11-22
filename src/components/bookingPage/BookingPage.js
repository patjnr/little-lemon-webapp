import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (
        <>
            <BookingForm
                availableTimes={props.availableTimes}
                updateTimes={props.updateTimes}
                onSubmit={props.onSubmit}
                reservations={props.reservations}
                setReservations={props.setReservations}
            />
        </>
    );
};

export default BookingPage;
