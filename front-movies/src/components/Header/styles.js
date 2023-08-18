import { styled } from "styled-components";

export const Container = styled.header`
    height: 100px;
    width: 100%;
    gap: 64px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    padding: 0 100px;

    > a h1 {
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
   
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 220px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        span {
            color: ${({theme}) => theme.COLORS.GRAY_400};
        }
    }

    > a img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
`;