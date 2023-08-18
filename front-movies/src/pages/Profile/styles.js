import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    header {
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CLEAR};
        display: flex;
        align-items: center;
        padding: 0 124px;
        
        >  a {
            display: flex;
            align-items: center;
            gap: 10px;
            color: ${({ theme }) => theme.COLORS.PINK};
            
            > span {
                color: ${({ theme }) => theme.COLORS.PINK};
            }

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                font-size: 24px;
            }
        } 
    }
    
`;

export const Form = styled.form`
    max-width: 340px;
    margin: -84px auto 0;
    
    :nth-child(4) {
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;
    height: 184px;
    width: 184px;

    > img {
        height: 184px;
        width: 184px;
        border-radius: 50%;
    }

    > label {
        height: 50px;
        width: 50px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`;
