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
    .container{
        grid-column: 1/2;
        grid-row: 1/3;
        background: linear-gradient(180deg, #FDEDE8 0%, rgba(255, 255, 255, 0) 100%), rgba(137, 78, 125, 0.39);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 2rem 1.5rem;
        display: grid;
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
        img{
            width: 100px;
            height: 100px;
        }
    }
`
