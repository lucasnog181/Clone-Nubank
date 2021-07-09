import { createContext, ReactNode, useState } from "react"


type ModalContextProviderData = {
    children: ReactNode
}

type ModalContextData = {
    isOpenModal: boolean;

}

export const ModalContext = createContext({} as ModalContextData);



export function ModalContextProvider({ children }: ModalContextProviderData) {

    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <ModalContext.Provider value={{
            isOpenModal,

        }}>
            {children}
        </ModalContext.Provider>
    )

}