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

export function NewMovie(){
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
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota(de 0 a 5)"/>
                    </MovieInformation>
                    <TextArea placeholder="Observações"/>
                    <Section title="Marcadores">
                        <TagWrapper>
                            <MovieItem value={"React"}/>
                            <MovieItem isNew value={"Novo marcador"}/>
                        </TagWrapper>
                    </Section>
                    <ButtonSection>
                        <Button title="Excluir filme" blacked/>
                        <Button title="Salvar alterações" />
                    </ButtonSection>       
                </Form>
            </Content>
        </Container>
    );
};