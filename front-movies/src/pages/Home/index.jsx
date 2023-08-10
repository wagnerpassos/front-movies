
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Content, Cards } from "./styles";

export function Home() {
  return (
    <Container>
        <Header/>
        <Content>
            <div>
                <h1>Meus Filmes</h1>
                <Button title="Adicionar filme"/>
            </div>
            <Cards>
                <Card title="Interestelar"/>
                <Card title="Interestelar"/>
                <Card title="Interestelar"/>
            </Cards>
        </Content>
        
    </Container>
  );
};
