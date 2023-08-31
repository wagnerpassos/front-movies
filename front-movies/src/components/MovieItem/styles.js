import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_FULL};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, $isnew})=> $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : `none`};
    
    border-radius: 10px;
    padding-right: 10px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > input {
        height: 45px;
        width: 100%;

        padding: 10px;

        color: ${({theme}) => theme.COLORS.WHITE};
        border: none;
        background: transparent;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

`;