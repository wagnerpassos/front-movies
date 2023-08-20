import { Container } from "./styles";
import { StarRank } from "../../components/StarRank";
import { Tag } from "../Tag";

export function Card({title, description, rating = 0}){
    return (
        <Container>
            <h1>{title}</h1>
            <StarRank starCount={Number(rating)}/>
            <span>
                {description}
            </span>
            <div className="tags">
                <Tag title="FICÇÃO"/>
                <Tag title="DRAMA"/>
                <Tag title="FAMÍLIA"/>
            </div>
        </Container>
    );
};