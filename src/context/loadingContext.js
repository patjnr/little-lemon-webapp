import React, {createContext, useState} from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider
            value={{
                isLoading,
                toggleLoading: () => setIsLoading((isLoading) => !isLoading),
            }}
        >
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => React.useContext(LoadingContext);
