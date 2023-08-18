import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme, blacked}) => (blacked ? theme.COLORS.BLACK : theme.COLORS.PINK)};
    color: ${({theme}) => theme.COLORS.WHITE};
    height: 56px;
    border: 0px;
    margin-top: 16px;
    padding: 0px 16px;
    font-weight: 500;
    border-radius: 10px;

    &:disabled {
        opacity: 0.5;
    }
`;