import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Container, Content, Form } from "./styles";

export function NewMovie(){
    return (
        <Container>
            <Header/>
            <Content>
                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>
                    <main>
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota(de 0 a 5)"/>
                    </main>
                    <TextArea placeholder="Observações"/>
                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem value={"React"}/>
                            <MovieItem isNew value={"Novo marcador"}/>
                        </div>
                    </Section>
                    <footer>
                        <Button title="Excluir filme" blacked/>
                        <Button title="Salvar alterações" />
                    </footer>       
                </Form>
            </Content>
        </Container>
    );
};