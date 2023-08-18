import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    color: ${({theme, $isactive}) => $isactive === "true" ? theme.COLORS.PINK : theme.COLORS.GRAY_400};

    border: none;
    font-size: 16px;
`