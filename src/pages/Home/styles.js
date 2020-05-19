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
    overflow: hidden;

    p {
        display: grid;
        align-items: center;
        justify-content: center;
        justify-items: center;
        min-width: 300px;
        height: 200px;

        background: #333;

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

        margin: 10px;
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

export const Footer = styled.footer`
    color: #fff;
    top: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #000;
    padding: 12px 8%;
    align-items: center;
    justify-content: space-between;

    svg {
            &:hover {
            color: #97FF83;
            }
        }

    p {
        padding: 0 10px;
        font-size: 0.8rem;
    }

    a {
        color: #fff;
        justify-self: center;
        font-family: 'Gilroy', sans-serif;

        font-size: 0.8rem;
        text-align: center;

        cursor: pointer;

        &:first-child{
            padding-left: 10px;
        }

        transition: background cubic-bezier(0.075, 0.82, 0.165, 1) 2s;

        &:hover {
            color: #97FF83;
        }
    }

    svg {
        color: #fff;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
`;

export const RedesSociais = styled.div`
    justify-self: end;

    a {
        padding: 0 7px;
    }
`;



