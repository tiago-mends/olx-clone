import styled from 'styled-components';

export const PageArea = styled.div `
    form{
        background-color: #fff;
        border-radius: .8rem;
        padding: 1rem;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

        .area{
            display: flex;
            align-item: center;
            padding: 1rem;
            max-width: 50rem;

            .area--title{
                width: 20rem;
                text-align: right;
                padding-right: 2rem;
                font-size: 1.4rem;
            }

            .area--input{
                flex: 1;

                input, select, textarea{
                    width: 100%;
                    font-size: 1.4rem;
                    padding: .5rem;
                    border: 1px solid #DDD;
                    border-radius: .8rem;
                    outline: 0;

                    &:focus{
                        border: 1px solid #333;
                    }
                }

                textarea{
                    height: 15rem;
                    resize: none;
                }

                button{
                    width: 28rem;
                    background-color: #F28000;
                    border: 0;
                    outline: 0;
                    padding: .5rem 1rem;
                    border-radius: .8rem;
                    color: #FFF;
                    font-size: 1.6rem;
                    cursor: pointer;

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