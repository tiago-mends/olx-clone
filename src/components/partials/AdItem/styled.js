import styled from 'styled-components';

export const Item = styled.div `
    a{
        display: block;
        border: 1px solid #FFF;
        margin: 1rem;
        padding: 1rem;
        border-radius: .8rem;
        color: #000;
        background-color: #FFF;
        height: 28rem;

        &:hover{
            border: 1px solid #CCC;
        }

        .itemImage img{
            width: 100%;
            border-radius: .8rem;
        }

        .itemName{
            font-weigth: bold;
        }
    }
`;
