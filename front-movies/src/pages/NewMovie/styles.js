import { styled } from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    max-height: 700px;
    width: 100%;
    padding: 0 100px;
    margin-top: 40px;
    overflow-y: scroll;
`;

export const Form = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;


        > main {
            margin-top: 40px;
            display: flex;
            gap: 20px;
        }

        > footer {
            display: flex;
            gap: 20px;
            margin-bottom: 40px;
        }

        > textarea { 
            margin-top: 40px;
        }

        .tags { 
            display: flex;
            align-items: center;
            background-color: black;
            padding: 16px;
            gap: 10px;
            border-radius: 10px;
        }
`;