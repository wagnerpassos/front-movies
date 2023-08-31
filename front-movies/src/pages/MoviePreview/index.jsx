import { Container, Content, TextBox, TagWrapper, PostInfo, MovieHeader } from "./styles";
import clock from "../../assets/clock.svg";
import { Tag } from "../../components/Tag";
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { StarRank } from "../../components/StarRank";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function MoviePreview() {
    const [movie, setMovie] = useState(null);
    const [user, setUser] = useState(null);
    const params = useParams();

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movie/${params.id}`);
            setMovie(response.data);
        }
        fetchMovie();
    }, []);

    useEffect(() =>{
        async function fetchUser() {
            const response = await api.get(`/user/${movie.user_id}`);
            setUser(response.data);
        }

        if(movie && movie.user_id)
            fetchUser();
    }, [movie]);

    function formateDate(data){
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const date = new Date(data);
        let dataFormatada = ((date.getDate() )) + " de " + ((meses[date.getMonth()])) + " de " + date.getFullYear(); 
        return dataFormatada;
    }

    return (  
        <Container>
            <Header/>
            { movie &&
                <Content>
                        <Link to="/">
                            <ButtonText icon={FiArrowLeft} title={"Voltar"} isActive/>
                        </Link>
                        <MovieHeader>
                            <h1>{movie.title}</h1> 
                            <StarRank starCount={movie.rating}/>
                        </MovieHeader>
                        <PostInfo>
                            <img src="https://github.com/wagnerpassos.png" alt="" />
                            <span>Por {user && user.name}</span>
                            <img src={clock} alt="relógio" />
                            <span>{formateDate(movie.created_at)}</span>
                        </PostInfo>
                        <TagWrapper>
                            <Tag title={"FICÇÃO"}/>
                            <Tag title={"DRAMA"}/>
                            <Tag title={"FAMÍLIA"}/>
                        </TagWrapper>
                        <TextBox>
                            {movie.description}    
                        </TextBox>     
                </Content>
            }
        </Container>
    );
};