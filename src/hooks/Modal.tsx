import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"


export const userModal = () => {
    return useContext(ModalContext)
}