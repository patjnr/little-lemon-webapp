import {Route, Routes, useNavigate} from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./bookingPage/BookingPage";
import {useEffect, useReducer, useState} from "react";
import {fetchAPI, submitAPI} from "../Api";
import Reservations from "./reservations/Reservations";
import {useLoading} from "../context/loadingContext";

// Step 1: Update function
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
                id: 101,
                name: "Johnny Depp",
                date: "2025-01-01",
                time: "18:00",
                diners: 2,
                occasion: "Birthday",
                table: {id: 1, name: "Main 1", reserved: true},
                email: "jo@ddd.com",
                phone: "045656565732",
                specialRequests: "No Special Requests",
            },
            {
                id: 102,
                name: "Scarlet Jonson",
                date: "2025-01-02",
                time: "19:00",
                diners: 4,
                occasion: "Anniversary",
                table: {id: 2, name: "Main 2", reserved: false},
                email: "sca@j.com",
                phone: "565656548778",
                specialRequests: "No Special Requests",
            },
            {
                id: 103,
                name: "Jannet Smith",
                date: "2025-01-03",
                time: "20:00",
                diners: 6,
                occasion: "Graduation",
                table: {id: 3, name: "Main 3", reserved: true},
                email: "jan@smith.com",
                phone: "565656548732",
                specialRequests: "No Special Requests",
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
    const {toggleLoading} = useLoading();
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
