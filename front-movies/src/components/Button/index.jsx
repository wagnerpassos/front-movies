import { Container } from "./styles";

export function Button({title, blacked = false}) {
    return (
        <Container blacked={blacked}>
            {title}
        </Container>
    );
};