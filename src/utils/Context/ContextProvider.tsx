import {FC, ReactNode, useMemo, useState} from 'react';
import {Context} from "./Context.tsx";


interface ContextProviderprops {
    children: ReactNode
}

export const ContextProvider:FC<ContextProviderprops> = ({children}) => {
    const [isAdult, setIsAdult] = useState(false)
    const [isCookie, setIsCookie] = useState(false)

    const closeAdultWarning = () => {
        setIsAdult(true)
    }


    const closeCookieModal = () => {
        setIsCookie(true)
    }

    const defaultProps = useMemo(() => ({
        isAdult: isAdult,
        isCookie: isCookie,
        setIsCookie: closeCookieModal,
        setIsAdult: closeAdultWarning
    }), [isAdult, isCookie])


    return (
        <Context.Provider value={defaultProps}>
            {children}
        </Context.Provider>
    );
};

