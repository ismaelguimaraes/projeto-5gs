import styled from 'styled-components';
import { darken } from 'polished';

import bg2 from '../../assets/imagens/background2.png';
import hero from '../../assets/imagens/background.png';

import thumb from '../../assets/imagens/thumbnail.png';
import thumb2 from '../../assets/imagens/thumbnail2.png';

export const Hero = styled.div`
    display: flex;
    flex-direction: column;

    background: #222 url(${hero}) right no-repeat;
    background-size: 100vh;

    color: #fff;

    align-items: flex-start;
    justify-content: center;

    padding-top: 40px;
    padding-left: 105px;

    width: 100vw;
    height: 100vh;

    @media (max-width: 650px) {
        padding-left: 0;
        align-items: center;
    }

    @media (max-width: 500px) {
        background: #10e660;
        padding-left: 0;
    }

    h1 {
        font-family: 'Bebas Neue', cursive;
        color: #10e660;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-weight: 300;
        font-size: 4.5rem;
        text-align: start;
        width: 28rem;
        background: #222;
        padding-left: 10px;

        border-top-right-radius: 15px;
        border-top-left-radius: 15px;

        @media (max-width: 650px) {
            text-align: center;
            font-size: 3rem;
            width: 80vw;
        }

        @media (max-width: 500px) {
            text-align: center;
            font-size: 3rem;
            width: 80vw;
        }
    }

    p {
        font-size: 1.25rem;
        letter-spacing: 0.094rem;
        text-align: start;
        width: 28rem;
        height: 60px;
        padding-left: 10px;
        background: #222;

        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;

        @media (max-width: 650px) {
            text-align: center;
            width: 80vw;
            font-size: 0.8rem;
            height: 35px;
        }

        @media (max-width: 500px) {
            text-align: center;
            width: 80vw;
            font-size: 0.8rem;
            height: 40px;
        }
    }
`;

export const Video = styled.div`
    display: flex;
    flex-direction: column;
    background: #222 url(${bg2}) left no-repeat;
    background-size: 80vh;

    width: 100vw;
    min-height: 80vh;

    align-items: center;

    padding: 50px 0px;


    color: #10e660;

    h2 {
        text-align: center;
        font-size: 3rem;
        font-weight: 100;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 3px;
        margin-bottom: 30px;
        background: #222;
        border-radius: 15px;
        padding: 10px 40px;
    }
`;

export const VideoGrid = styled.div`

    padding-top: 30px;

    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1040px) {
        overflow-x: scroll;
        width: 90vw;

        div {
            display: flex;
            justify-content: flex-start;
        }
    }

    a {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        width: 21.5rem;
        height: 12.5rem;
        margin: 0 10px 50px 10px;

        &:hover {
            transition: background 0.2s ease-in-out;
            background: #fff;
        }

        svg {
            grid-column: 1;
            grid-row: 1;
            z-index: 2;
            color: #fff;
        }

        article {
            grid-column: 1;
            grid-row: 1;
            filter: brightness(60%);
            height: 12.5rem;
            width: 20.625rem;
        }

        p {
            justify-self: self-start;
            align-self: flex-start;
            color: #fff;
            font-size: 1rem;
            letter-spacing: 0.063rem;
            margin-top: 7px;
        }

        &:nth-child(1) {
            article {
                background: url(${thumb}) center no-repeat;
                background-size: contain;
            }

            p {
                &::after {
                    content: "5GS - Sustentabilidade";
                }
            }
        }
        &:nth-child(2) {
            article {
                background: url(${thumb2}) center no-repeat;
                background-size: contain;
            }

            p {
                &::after {
                    content: "5GS - O que fizemos até agora";
                }
            }
        }
        &:nth-child(3) {
            article {
                background: url(${thumb}) center no-repeat;
                background-size: contain;
            }

            p {
                &::after {
                    content: "5GS - Sem nome";
                }
            }
        }
    }
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 120px 110px;


        h2{
            font-size: 2rem;
            font-family: 'Bebas neue';
            letter-spacing: 0.188rem;
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
            font-size: 1.2rem;
            line-height: 1.875rem;
            text-align: justify;
            padding-bottom: 25px;
        }

        a {
            display: flex;
            text-align: center;

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


        h2{
            font-size: 2rem;
        }

        hr{
            background-color: black;
            height: 0.188rem;
            width: 50%;
            margin: 15px 0;
        }

        p{
            font-size: 1rem;
        }
}
`;



