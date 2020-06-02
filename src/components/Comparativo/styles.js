import styled from 'styled-components';
import { darken } from 'polished';

export const Comparacao = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    background: #fff;
    color: #333;

    padding: 50px 0px;

    width: 100%;
    box-sizing: border-box;

    h2 {
        text-align: center;
        font-size: 3rem;
        font-weight: 100;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.188rem;
    }

    h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 100;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.188rem;
        margin-bottom: 40px;
    }

    a {
        display: flex;

        padding: 10px 30px;

        justify-content: center;
        align-items: center;

        margin-top: 40px;

        border-radius: 4px;
        background-color: #333;
        color: #fff;

        max-height: 38px;

        &::after{
            content: "Ler mais+";
            text-align: center;
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

    min-height: 18.75rem;

    @media (max-width: 867px) {
        overflow-x: scroll;
        width: 95vw;
    }

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

        section {
            z-index: 2;
            display: flex;
            flex-direction: column;
            text-transform: uppercase;
            background: #10E660;
            color: #000;
            font-size: 1rem;

            justify-content: center;
            align-items: center;
            text-align: center;

            width: 12.5rem;
            height: 8.125rem;
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
    padding: 25px 18px 20px 15px;

    height: 8.75rem;
    width: 12.5rem;

    z-index: 1;

    background: #10B74E;
    border-radius: 5px;

    color: #111;
    letter-spacing: 0.063rem;
    font-size: 1rem;
    text-align: center;
`;
