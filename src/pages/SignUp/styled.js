import styled from 'styled-components';

export const PageArea = styled.div `
    form{
        background-color: #fff;
        border-radius: .8rem;
        padding: 2.4rem;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        margin-bottom: 20vh;

        .area{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            max-width: 50rem;
            margin: auto;

            .area--title{
                font-size: 1.8rem;
                margin: 0 0 1rem 1rem;
            }

            .area--input{
                flex: 1;

                input{
                    width: 100%;

                    &:focus{
                        border: 1px solid #000;
                    }
                } 

                select{
                    width: 100%;
                }

                button{
                    padding: 2.1rem 4.8rem;
                    font-weight: bold;
                    background-color: #F17228;
                    color: #FFFFFF;
                    cursor: pointer;
                    width: 100%;

                    &:hover{
                        filter: brightness(1.2);
                    }
                }
            }
        }
    }

    @media (max-width: 60rem){
        form{
            .area{
                flex-direction: column;

                .area--title{
                    width: auto;
                    text-align: left;
                }

                .area--input button{
                    width: 100%;
                    padding: 1rem;
                }
            }
        }
    }
`;