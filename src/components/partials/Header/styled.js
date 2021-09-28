import styled from 'styled-components';


export const HeaderArea = styled.div `
    background-color: #FFFFFF;
    height: 7.8rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;


    .container{
        max-width: 100rem;
        margin: auto;
        display: flex;
        height: 7.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a{
        text-decoration: none;
    }

    .logo{
        display: flex;
        align-items: center;

        .logo-1, .logo-2{
            font-size: 3.111rem;
            font-weight: bold;
        }
        
        .logo-1{
            color: #F17228;
            margin-left: .5rem;
        }

        .logo-2{
            color: #FFAB05;
        }

        img{
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    nav{
        ul, li{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul{
            display: flex;
            align-items: center;
        }

        li{            
            .cntButton, .adButton{
                display: flex;
                align-items: center;
                padding: 1.4rem 2.4rem;
                font-size: 1.8rem;
                border-radius: 1rem;
                box-shadow: rgba(255, 171 , 5, 0.5) 0px 10px 15px -3px, rgba(255, 171 , 5, 1) 0px 4px 6px -2px;
                font-weight: bold;
                color: #FFAB05;

                img{
                    margin-right: 1rem;
                }
            }

            .cadButton, .accButton{
                font-weight: bold;
            }

            .cadButton, .extButton, .accButton{
                display: flex;
                align-items: center;
                font-size: 1.8rem;
                color: #424242;
                letter-spacing: .15rem;
                margin-right: 3rem;
                cursor: pointer;

                img{
                    margin-right: 1rem;
                }
            }

            .extButton{
                background: none;
            }
        }

        li:last-child{
            margin-right: 0;  
        }
    }

    @media (max-width: 60rem){
        &{
            height: 24rem;
        }

        .container{
            flex-direction: column;
        }

        .logo{
            justify-content: center;
            margin: 2rem 0;
        }

        nav ul{
            flex-direction: column;
            height: auto;
        }

        nav li{
            margin: 1rem 0;
        }
    }
`;