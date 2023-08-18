import { styled } from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 140px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-bottom: 10px;
    border-radius: 10px;
    border: 10px;
    padding: 16px;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`;