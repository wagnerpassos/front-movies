import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Content, Cards, FixedButton } from "./styles";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get("/movie");
            setMovies(response.data);
        }
        fetchMovies();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <Link to="new">
                        <FixedButton>
                            <FiPlus size={16} />
                            Adicionar Filme
                        </FixedButton>
                    </Link>

                </div>
                <Cards>
                    {
                        movies && movies.map((movie, index) => {
                            return (
                                <Link key={index} to={`/preview/${movie.id}`}>
                                    <Card 
                                        title={movie.title} 
                                        description={movie.description}
                                        rating={movie.rating}
                                    />
                                </Link>
                            );
                        })
                    }
                </Cards>
            </Content>
        </Container>
    );
};
