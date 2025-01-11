import {createContext} from "react";


export interface ModalContext {
    isAdult: boolean,
    isCookie: boolean
}

export interface ContextProps {
    isAdult?: boolean,
    isCookie?: boolean,
    setIsAdult?: (isAdult: boolean) => void,
    setIsCookie?: (isCookie: boolean) => void
}


export const Context = createContext<ContextProps>({})


