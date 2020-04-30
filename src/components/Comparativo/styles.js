import styled from 'styled-components';
import { darken } from 'polished';

export const Comparação = styled.div`
    background: #fff;
    color: #333;
    padding: 80px 220px;
    max-width: 100vw;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    @media(max-width: 909px){
        padding: 0 10px;
    }

    h2 {
        text-align: center;
        font-size: 3rem;
        font-weight: 100;
        font-family: Bebas neue;
        letter-spacing: 3px;

        @media(max-width: 689px){
            font-size: 2rem;
        }
    }

    h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 100;
        font-family: Bebas neue;
        letter-spacing: 3px;
        margin-bottom: 40px;

        @media(max-width: 689px){
            font-size: 2rem;
        }
    }

    a {
        display: flex;

        padding: 10px 30px;
        align-self: center;

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

`;

export const Requisitos = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    height: 300px;

    div {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        &:nth-child(1){
            button {
                &::after {
                    padding-top: 10px;
                    content: "Velocidade";
                }
            }
        }

        &:nth-child(2){
            button {
                &::after {
                    padding-top: 10px;
                    content: "Latência";
                }
            }


        }

        &:nth-child(3){
            button {
                &::after {
                    padding-top: 10px;
                    font-size: 1rem;
                    content: "Dispositivos";
                }
            }


        }

        &:nth-child(4){
            button {
                &::after {
                    padding-top: 10px;
                    content: "Energia";
                }
            }
        }

        button {
            z-index: 2;
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            background: #1eee70;
            color: #000;
            font-size: 1rem;

            justify-content: center;
            align-items: center;
            text-align: center;

            width: 200px;
            height: 130px;
            padding: 30px;

            border-radius: 5px;
            border: none;
        }
    }
`;

export const Conteudo = styled.div`
    display: flex;

    position: relative;
    top: -10px;
    padding: ${props => props.active ? "0px 18px 0px 15px" : "25px 18px 20px 15px"};

    height: ${props => props.active ? "0px" : "140px"};
    width: 200px;

    z-index: 1;

    background: #2bbe60;
    border-radius: 5px;

    transition: height .5s cubic-bezier(0.075, 0.82, 0.165, 1);

    color: #111;
    letter-spacing: 1px;
    font-size: 1rem;
    text-align: center;

    overflow: hidden;
`;
