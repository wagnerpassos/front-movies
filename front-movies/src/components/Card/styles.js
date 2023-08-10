import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CLEAR};
    padding: 32px;
`;