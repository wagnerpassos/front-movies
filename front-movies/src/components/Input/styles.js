import { styled } from "styled-components";

export const Container = styled.div`
    min-width: 100px;
    width: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;