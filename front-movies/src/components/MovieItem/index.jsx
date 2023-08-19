import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles.js";

export function MovieItem({ isNew = false, title, onClick, ...rest }) {
    return (
        <Container $isnew={isNew}>
            <input
                type="text"
                title={title}
                readOnly={!isNew}
                {...rest}
            />

            <button 
                type="button" 
                onClick={onClick}
                className={isNew ? "button-add" : "button-delete"}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    );
};