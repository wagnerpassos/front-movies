import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { ButtonSection, Container, Content, Form, TagWrapper, MovieInformation, HeaderNav } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { toast } from 'react-toastify';

export function NewMovie(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(tag){
        setTags(tags.filter((tmpTag) => tmpTag != tag))
    }

    function handleAddNewMovie(e){
        e.preventDefault();
        toast.error("Vem mamar o negão");
    }

    return (
        <Container>
            <Header/>
            <Content>   
                <Form>
                    <Link to="/">
                        <ButtonText icon={FiArrowLeft} title={"Voltar"} isActive/>
                    </Link>
                    <h1>Novo filme</h1>
                    <MovieInformation>
                        <Input 
                            type="text"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => {setTitle(e.target.value)}}
                        />
                        <Input 
                            type="number"
                            min="0"
                            max="10"
                            step="0.01"
                            placeholder="Sua nota(de 0 a 10)"
                            value={rating}
                            onChange={
                                (e) => {
                                    if(e.target.value.length <= 2 && e.target.value >= 0 && e.target.value <= 10 )
                                        setRating(e.target.value)
                                }
                            }
                        />
                    </MovieInformation>
                    <TextArea 
                        placeholder="Observações"
                        value={description}
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                    <Section title="Marcadores">
                        <TagWrapper>
                            {
                                 tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => {handleRemoveTag(tag)}}
                                    />
                                ))
                            }
                            <MovieItem 
                                isNew 
                                title={"Novo marcador"}
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                                maxLength="10"
                            />
                        </TagWrapper>
                    </Section>
                    <ButtonSection>
                        <Button title="Excluir filme" blacked/>
                        <Button 
                            title="Salvar alterações" 
                            onClick={(e) => {
                                handleAddNewMovie(e)
                            }}
                        />
                    </ButtonSection>       
                </Form>
            </Content>
        </Container>
    );
};