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

export const FixedButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BLACK};

    width: 180px;
    height: 56px;
    border: 0px;
    margin-top: 16px;
    padding: 0px 16px;
    font-weight: 400;
    border-radius: 10px;

    &:disabled {
        opacity: 0.5;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-height: 500px;
    overflow-y: auto;
`;

