import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.main`
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-template-rows: 2fr;
    @media (max-width: 760px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 100vh);
    }
    .container{
        grid-column: 1/2;
        grid-row: 1/3;
        background: linear-gradient(180deg, #FDEDE8 0%, rgba(255, 255, 255, 0) 100%), rgba(137, 78, 125, 0.39);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 2rem 1.5rem;
        display: grid;
        @media (max-width: 760px){
            grid-row: 1/2;
    }
    }
    .descripcion{
        margin: auto;
        p{
            margin: 2rem 0;
            span{
            color: ${theme.morado};
            font-style: italic;
            font-weight: bold;
        }
        }
 
    }
    .images{
        width: 100%;
        display: flex;
        justify-content: space-around;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        p{
            max-width: 70px;
            margin: 0 auto;
            padding: 0 5px;
            text-align: center;
        }
    }
    .items{
        grid-column: 2/3;
        grid-row: 1/3;
        display: grid;
        background:#ffeafc;
        @media (max-width: 760px){
            grid-column: 1/2;
            grid-row: 2/3;
    }
        .contenedor{
            width: 70%;
            margin: auto;
            display: grid;
            grid-template-rows: 4fr;
            grid-gap: 3px;
                .card{
                border: 2px solid ${theme.morado};
                border-radius: 10px;
                margin: 10px;
                display: flex;
                padding: 3px 1px;
                .texto{
                    width: 100%;
                    a{
                        text-decoration: none;
                        color: #ffffff;
                        background-color: ${theme.morado};
                        padding: 2px 1.5rem;
                        border-radius: 10px;
                        margin: 0 auto 10px auto;
                        display: block;
                        width: 50px;
                    }
                    p{
                        margin: 8px 0 14px 0;
                        font-size: 14px;
                    }
                    h4{
                        margin: 0;
                    }
                }
                .img{
                    max-height: 100px;
                    width: 150px;
                   
                }
                    img{
                    width: auto;
                    max-height: 100%;
                    border-radius: 10px;
                }
            }
        }
  
     
    }
`
