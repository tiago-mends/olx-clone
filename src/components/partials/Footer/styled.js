import styled from 'styled-components';

export const FooterArea = styled.div `
    background-color: #212121;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100rem;
        height: 5.3rem;
        margin: auto;
        padding: 5rem 0 6rem;
        font-size: 1.5rem;
        color: #F5F5F5;
    }

    @media (max-width: 60rem) {
        div{
            width: 100%;
            max-width: 60rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`;