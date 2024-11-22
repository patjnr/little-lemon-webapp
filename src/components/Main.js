import {Route, Routes, useNavigate} from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./bookingPage/BookingPage";
import {useEffect, useReducer, useState} from "react";
import {fetchAPI, submitAPI} from "../Api";
import Reservations from "./reservations/Reservations";

export const updateTimes = (state, action) => {
    if (action.type === "update") {
        return fetchAPI(action.date);
    }
    return state;
};

export const saveReservationsToLocalStorage = (reservations) => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
};

export const getReservationsFromLocalStorage = () => {
    return (
        JSON.parse(localStorage.getItem("reservations")) || [
            {
                id: 231,
                name: "Emma Watson",
                date: "2025-03-15",
                time: "18:45",
                diners: 3,
                occasion: "Birthday",
                table: {id: 7, name: "Garden 3", reserved: true},
                email: "emma@watson.com",
                phone: "048765432198",
                specialRequests: "Window seat",
            },
            {
                id: 542,
                name: "Chris Evans",
                date: "2025-02-20",
                time: "19:30",
                diners: 5,
                occasion: "Reunion",
                table: {id: 5, name: "Main 5", reserved: false},
                email: "chris.evans@example.com",
                phone: "048765432119",
                specialRequests: "Allergic to peanuts",
            },
            {
                id: 389,
                name: "Olivia Wilde",
                date: "2025-04-05",
                time: "20:15",
                diners: 2,
                occasion: "Romantic Dinner",
                table: {id: 2, name: "Main 2", reserved: true},
                email: "olivia.w@example.com",
                phone: "048123456789",
                specialRequests: "Candles on the table",
            },
        ]
    );
};

export const initializeTimes = () => {
    return fetchAPI(new Date());
};

export const submitForm = (form) => {
    return submitAPI(form);
};

export default function Main() {
    const initialTimes = initializeTimes();
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);
    const [reservations, setReservations] = useState(
        getReservationsFromLocalStorage()
    );

    useEffect(() => {
        const localReservations = getReservationsFromLocalStorage();
        if (localReservations.length > 0) {
            setReservations(localReservations);
        }
    }, []);

    useEffect(() => {
        saveReservationsToLocalStorage(reservations);
    }, [reservations]);

    const navigate = useNavigate();

    const handleEdit = (reservation) => {
        navigate(`/booking/${reservation.id}`, {
            state: {editForm: reservation},
        });
    };

    return (
        <main id="Main">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            updateTimes={(selectedDate) =>
                                dispatch({type: "update", date: selectedDate})
                            }
                            onSubmit={submitForm}
                            reservations={reservations}
                            setReservations={setReservations}
                        />
                    }
                />
                <Route
                    path="/booking/:id"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            updateTimes={(selectedDate) =>
                                dispatch({type: "update", date: selectedDate})
                            }
                            onSubmit={submitForm}
                            reservations={reservations}
                            setReservations={setReservations}
                        />
                    }
                />
                <Route
                    path="/reservations"
                    element={
                        <Reservations
                            handleEdit={handleEdit}
                            reservations={reservations}
                            setReservations={setReservations}
                        />
                    }
                />

                <Route path="*" element={<Homepage/>}/>
            </Routes>
        </main>
    );
}
