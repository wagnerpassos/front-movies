import { styled } from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    padding: 0 100px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        > h1 {
            margin: 40px 0;
        }
    }
`;