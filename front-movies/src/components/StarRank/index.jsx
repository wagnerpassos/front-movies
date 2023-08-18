import { Container } from "./styles";
import starOn from "../../assets/staron.svg";
import starOff from "../../assets/staroff.svg";

export function StarRank({ starCount = 0 }) {
    const stars = [];
    const max = 5;

    for (let i = 0; i < starCount; i++) {
        stars.push(<img key={`${i}on`} src={starOn} alt={`Star ${i + 1}`} />);
    }

    for (let i = 0; i < max - starCount; i++) {
        stars.push(<img key={`${i}off`} src={starOff} alt={`Star off ${i + 1}`} />);
    }

    return (
        <Container>
            {stars}
        </Container>
    )
};