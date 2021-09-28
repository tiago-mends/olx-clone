import styled from 'styled-components';

export const SearchArea = styled.div `
    background: rgb(255,179,14);
    background: linear-gradient(45deg, rgba(255,179,14,1) 0%, rgba(255,202,12,1) 50%, rgba(255,179,14,1) 100%);
    height: 62rem;
    
    padding: 2rem 0;

    h2{
        color: #FFFFFF;
        font-size: 5rem;
        margin-bottom: 1rem;
    }

    p{
        color: #504F4F;
        font-size: 2rem;
    }

    .searchBox{
        background-color: #FFFFFF;
        padding: 2rem 1.5rem;
        border-radius: .8rem;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        display: flex;
        flex-direction: column;


        form{
            display: flex;
            gap: 1rem;
            padding: 2.4rem;

            input, select, button{
                border-radius: .8rem;
                color: #000;
            }

            input{
                flex: 1;
                outline: none;

                &::placeholder{
                    color: #9E9E9E;
                }
            }

            select{
                width: 8rem;
                text-align: center;
                border: 1px solid #F5F5F5;
            }

            button{
                display: flex;
                align-items: center;
                padding: 2.1rem 4.8rem;
                font-weight: bold;
                background-color: #F17228;
                color: #FFFFFF;
                cursor: pointer;

                img{
                    margin-right: 1rem;
                }
            }
        }

        .categoryDiv{
            border-top: 1px solid #CCC;
            padding: 2.4rem;
            
            h6{
                display: inline-block;
                font-size: 1.8rem;
                color: #F17228;
                margin: 0;
                background-color: rgba(255, 202, 12, .15);
                border-radius: .5rem;
                padding: 1rem 2.4rem;
                margin-bottom: 2.4rem;
            }
        }
        .categoryList{
            display: flex;
            flex-wrap: wrap;
    
            .categoryItem{
                width: 25%;
                display: flex;
                align-items: center;
                color: #000;
                height: 5rem;
                margin-bottom: 1rem;
    
                &:hover{
                    color: #999;
                }
    
                img{
                    width: 4.5rem;
                    height: 4.5rem;
                    margin-right: 1rem
                }
            }
        }
    }

    

    @media (max-width: 60rem){
        h2, p{
            margin-left: 2rem;
        }

        .searchBox form{
            flex-direction: column;

            input{
                padding: 1rem;
                margin: 0 0 1rem 0;
            }

            select{
                width: 100%;
                margin-bottom: 1rem;
            }
        }

        .categoryDiv .categoryList .categoryItem{
            width: 50%;
            padding: 1rem;
        }
    }
`;

export const PageArea = styled.div `
    h2{
        font-size: 4.3rem;
        color: #212121;
        text-align: center;
        margin: 8rem 0 8.8rem;
    }

    .list{
        display: flex;
        flex-wrap: wrap;

        .aditem{
            width: 25%;
        }
    }

    .linkArea{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4rem 0;

        .seeAllLink{
            display: flex;
            align-items: center;
            background-color: #FFAB05;
            color: #FFF;
            font-size: 1.8rem;
            font-weight: bold;
            
            padding: 2.1rem 4.8rem;
            border-radius: 1rem;
            box-shadow: rgba(255, 171 , 5, 0.1) 0px 10px 15px -3px, rgba(255, 171 , 5, .01) 0px 4px 6px -2px;
        
            img{
                margin-left: 1rem;
            }
        }
    }

    @media (max-width: 60rem){
        &{
            margin: 1rem;
        }

        h2{
            margin-top: 20rem;
        }
        
        .list .aditem{
            width: 50%;
        }
    }
`;

