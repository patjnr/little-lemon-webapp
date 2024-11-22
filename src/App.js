import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {useLoading} from "./context/loadingContext";

function App() {
    const {isLoading} = useLoading();
    return (
        <>
            <Header/>
            {isLoading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                    <div className="loader"></div>
                </div>
            ) : (
                <Main/>
            )}
            <Footer/>
        </>
    );
}

export default App;
