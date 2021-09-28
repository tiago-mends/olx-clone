import styled from 'styled-components';

export const PageArea = styled.div `
    display: flex;
    margin-top: 2rem;

    .leftSide{
        width: 25rem;
        margin-right: 1rem;

        .filterName{
            font-size: 1.5rem;
            margin: 1rem 0;
        }

        input, select{
            width: 100%;
            height: 4rem;
            border: .2rem solid #9BB83C;
            font-size: 1.5rem;
            color: #000000;
            padding: 1rem;
        }

        ul, li{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem{
            display: flex;
            align-items: center;
            padding: 1rem;
            border-radius: .8rem;
            color: #000000;
            cursor: pointer;

            img{
                width: 2.5rem;
                height: 2.5rem;
                margin-right: .5rem;
            }

            span{
                font-size: 1.4rem;
            }
        }

        .categoryItem:hover, .categoryItem.active{
            background-color: #9BB83C;
            color: #FFFFFF;
        }
    }

    .rightSide{
        flex: 1;

        h2{
            margin: 0 0 0 1%;
            font-size: 1.8rem;
        }

        .listWarning{
            padding: 3rem;
            text-align: center;
        }

        .list{
            display: flex;
            flex-wrap: wrap;

            .aditem{
                width: 33%;
            }
        }

        .pagination{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            margin: 2rem 0 4rem 0;

            .pagItem{
                width: 3rem;
                height: 3rem;
                border: .1rem solid #000;
                border-radius: .8rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.4rem;
                cursor: pointer;

                &:hover{
                    border: .1rem solid #999;
                }

                &.active{
                    background-color: #ccc;
                }
            }
        }
    }

    @media (max-width: 60rem){
        &{
            flex-direction: column;
        }

        .leftSide{
            width: auto;
            margin: 1rem 0;

            ul{
                display: flex;
                flex-wrap: wrap;

                li{
                    width: 50%;
                }
            }
        }
    }
`;

