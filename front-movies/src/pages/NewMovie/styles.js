import { styled } from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    max-height: 650px;
    width: 100%;
    padding: 0 100px;
    margin-top: 40px;
    overflow-y: scroll;
`;

export const Form = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        > main {
            display: flex;
            gap: 20px;
        }
`;

export const TagWrapper = styled.div`
        display: flex;
        align-items: center;
        background-color: black;
        padding: 16px;
        gap: 10px;
        border-radius: 10px;
`;

export const HeaderNav = styled.header`
`;

export const MovieInformation = styled.div`
        display: flex;
        gap: 20px;
`;

export const ButtonSection = styled.div`
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
`;