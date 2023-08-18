import { styled } from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CLEAR};

    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 32px;

    > span {
        color: ${({theme}) => theme.COLORS.GRAY_400};
        height: 40px;
        overflow-y: hidden;
    }
`;