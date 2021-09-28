import styled from 'styled-components';

export const PageArea = styled.div `
    height: 80vh;

    h2{
        font-size: 5rem;
        text-transform: uppercase;
        text-align: center;
        background: rgb(255,179,14);
        background: linear-gradient(45deg, rgba(255,179,14,1) 0%, rgba(255,202,12,1) 50%, rgba(255,179,14,1) 100%);
        border-radius: .8rem;
        padding: 2.4rem;
        margin-bottom: 0;
    }

    p{
        margin-top: 1rem;
        font-size: 2.4rem;
        text-align: right;
    }

    div{
        display: flex;
        justify-content: center;
        margin-top: 20rem;

        a{
            padding: 2.1rem 4.8rem;
            font-weight: bold;
            background-color: #F17228;
            color: #FFFFFF;
            cursor: pointer;
            border-radius: .8rem;

            &:hover{
                filter: brightness(1.2);
            }
        }
    }
`;
