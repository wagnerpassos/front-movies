import { styled } from "styled-components";

export const Container = styled.div`
    
`;

export const Content = styled.div`
    padding: 0 100px;
    overflow-y: scroll;

    > div {
        display: flex;
        
        > h1 {
        margin: 40px 0;
    }
    }
    
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

