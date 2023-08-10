import { styled } from "styled-components";

export const Container = styled.input`
    border: none;

    width: 100%;
    border-radius: 5px;
    padding: 18px 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;