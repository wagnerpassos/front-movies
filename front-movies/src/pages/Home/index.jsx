import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Container, Content, Cards, FixedButton } from "./styles";


export function Home() {
  return (
    <Container>
        <Header/>
        <Content>
            <div>
                <h1>Meus Filmes</h1>
                <Link to="new">
                    <FixedButton>
                        <FiPlus size={16}/>
                        Adicionar Filme
                    </FixedButton>
                </Link>
                
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
