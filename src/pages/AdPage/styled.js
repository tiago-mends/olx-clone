import styled from 'styled-components';

export const Fake = styled.div `
    background-color: #CCC;
    height: ${props => props.height || 2}rem;
`;

export const PageArea = styled.div `
    display: flex;
    margin-top: 2rem;

    .box{
        background-color: #FFF;
        border-radius: .8rem;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        margin-bottom: 2rem;
    }

    .box--padding{
        padding: 1rem;
    }

    .leftSide{
        flex: 1;
        margin-right: 2rem;

        .box{
            display: flex;
        }

        .adImage{
            width: 32rem;
            height: 32rem;
            margin-right: 2rem;

            .each-slide img{
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 32rem;
            }
        }

        .ad-Info{
            flex: 1;

            .adName{
                margin-bottom: 2rem;

                h2{
                    margin: 2rem 0 0;
                }

                small{
                    color: #999;
                }
            }

            .adDescription{
                small{
                    color: #999;
                }
            }
        }
    }

    .rightSide{
        width: 25rem;

        .price span {
            color: #0000FF;
            display: block;
            font-weight: bold;
            font-size: 2.8rem;
        }

        .contactSellerLink{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;

            padding: 2.1rem 4.8rem;
            font-weight: bold;
            border-radius: .8rem;
            background-color: #F17228;
            box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
            color: #FFFFFF;
            cursor: pointer;
            width: 100%;

            &:hover{
                filter: brightness(1.2);
            }
        }

        .createdBy {
            strong{
                display: block;
                font-size: 2.4rem;
            }

            small{
                display: block;
                color: #999;
                margin-top: 1rem;
            }
        }
    }

    @media (max-width: 60rem){
        &{
            flex-direction: column;
        }

        .leftSide{
            margin: 0;
            
            .box{
                flex-direction: column;
                width: 32rem;
                margin: auto;
            }

            .ad-Info{
                padding: 1rem;
            }
        }

        .rightSide{
            margin-top: 2rem;
            width: auto;
            
            .box{
                width: 32rem;
                margin: auto;
            }

            .contactSellerLink{
                width: 32rem;
                margin: 2rem auto;
            }
        }
    }
`;

export const OthersArea = styled.div `
    h2{
        font-size: 2rem;
    }

    .list{
        display: flex;
        flex-wrap: wrap;

        .aditem{
            width: 25%;
        }
    }

    @media (max-width: 60rem){
        &{
            margin: 1rem;
        }

        .list .aditem{
            width: 50%;
        }
    }
`;

export const BreadCrumb = styled.div `
    font-size: 1.2rem;
    margin-top: 2rem;
    display: flex;
    gap: 1rem;

    a{
        text-decoration: underline;
    }

    @media (max-width: 60rem){
        &{
            margin: 2rem;
        }
    }
`;