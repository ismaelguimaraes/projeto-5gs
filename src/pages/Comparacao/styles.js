import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    width: 100vw;
    justify-content: center;
    align-items: center;
    padding: 130px 0;
    text-align: center;

    h1 {
        font-family: 'Bebas Neue', cursive;
        font-size: 3rem;
        font-weight: 100;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.188rem;

    }

    h2 {
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        font-weight: 100;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.063rem;
    }

`;

export const Card = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    background: #1eee70;

    div {
        min-width: 9.375rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    section {
        display: grid;
        align-items: flex-start;
        padding: 20px 30px;
        max-width: 56.25rem;
        text-align: start;
        grid-gap: 10px;
        background: #0DC954;
        box-shadow: inset 8px 0px 20px -20px black;

        h3 {
            font-size: 2rem;
            font-weight: 100;
            font-family: 'Bebas Neue', cursive;
            letter-spacing: 1px;
            padding-bottom: 5px;
        }

        p {
            font-size: 1rem;
            font-family: Roboto;
            letter-spacing: 1px;
            padding-bottom: 10px;
        }

        span {
            font-size: 0.8rem;
            font-family: Roboto;
            letter-spacing: 1px;

            a {
                &:hover {
                    text-decoration: underline #000;
                }
            }
        }
    }
`;
