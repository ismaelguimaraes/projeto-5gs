import styled from 'styled-components';
import { darken } from 'polished';

import bg2 from '../../assets/imagens/background2.png';
import hero from '../../assets/imagens/background.png';

export const Hero = styled.div`
    display: flex;
    flex-direction: column;

    background: #222 url(${hero}) right no-repeat;
    background-size: contain;

    color: #fff;
    padding-left: 105px;

    align-items: flex-start;
    justify-content: center;

    padding-top: 40px;

    width: 100vw;
    height: 100vh;

    h1 {
        font-family: Bebas neue;
        color: #10e660;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: 300;
        font-size: 4.5rem;
        text-align: start;
        width: 430px;
        background: #222;
    }

    p {
        font-size: 1.25rem;
        letter-spacing: 1.5px;
        text-align: start;
        width: 430px;
        background: #222;
    }
`;

export const Video = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 90vh;
    align-items: center;

    padding: 50px 0px;
    background: #222 url(${bg2}) left no-repeat;
    background-size: contain;
    color: #10e660;

    h2 {
        text-align: center;
        font-size: 3rem;
        font-weight: 100;
        font-family: Bebas neue;
        letter-spacing: 3px;
        margin-bottom: 30px;
        background: #222;
        padding: 10px 20px;
    }
`;

export const VideoGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;

    section {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        width: 355px;
        height: 220px;
        margin: 0 10px 20px 10px;

        svg {
            grid-column: 1;
            grid-row: 1;
            z-index: 2;
            color: #fff;
        }

        img {
            grid-column: 1;
            grid-row: 1;
            filter: brightness(60%);
            height: 200px;
        }

        p {
            justify-self: self-start;
            align-self: flex-start;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-top: 7px;
        }
    }
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 10%;
    padding: 120px 110px;


        h3{
            font-size: 2rem;
            font-family: 'Bebas neue';
            letter-spacing: 3px;
            margin-top: 25px;
            text-align: start;
            font-weight: 100;
        }

        hr{
            background-color: black;
            height: 2px;
            width: 41%;
            margin: 20px 0 20px 0;
        }

        p{

            text-align: center;
            font-size: 1.2rem;
            line-height: 30px;
            text-align: justify;
            padding-bottom: 25px;
        }

        a {
            display: flex;

            padding: 10px 30px;
            align-self: flex-start;

            margin-top: 40px;

            border-radius: 4px;
            background-color: #333;
            color: #fff;

            &::after{
                content: "Ler mais+";
            }

            &:hover {
                transition: background 0.2s ease-in-out;
                background: ${darken(0.1, '#1eee70')};
            }
        }

@media(max-width: 600px){
    min-height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    padding: 10%;


        h3{
            font-size: 2rem;
        }

        hr{
            background-color: black;
            height: 3px;
            width: 50%;
            margin: 15px 0;
        }

        p{
            font-size: 1rem;
        }
}
`;



