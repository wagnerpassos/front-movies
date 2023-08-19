import { Container } from "./styles";

export function Button({title, blacked = false, ...rest}) {
    return (
        <Container blacked={blacked} {...rest}>
            {title}
        </Container>
    );
};