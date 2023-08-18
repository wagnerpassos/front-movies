import { styled } from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 100px;
    margin-top: 40px;
    gap: 40px;
    max-height: 600px;
    overflow-y: auto;
`;

export const MovieHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const PostInfo = styled.div`
    display: flex;
    gap: 10px;

     > img {
            height: 16px;
            width: 16px;
            border-radius: 50%;
        }
`;

export const TagWrapper = styled.div`
`;

export const TextBox = styled.div`
`;
