import styled from 'styled-components';

export const Container = styled.section`

   > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_FULL};

    margin-bottom: 24px;

    color: ${({theme}) => theme.COLORS.GRAY_400};
    font-size: 20px;
    font-weight: 400;
   };
`
