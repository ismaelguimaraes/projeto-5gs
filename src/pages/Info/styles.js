import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    padding: 130px 0;

    section {
        display: flex;
        max-width: 900px;
        flex-direction: column;
    }

    h1 {
        font-family: 'Bebas Neue', cursive;
        font-weight: 100;
        letter-spacing: 0.125rem;
        font-size: 2.7rem;
        margin-bottom: 20px;
    }

    img {
        margin-bottom: 40px;
    }

    p {
        margin-bottom: 40px;
        font-family: roboto;
        font-size: 1.2rem;
        line-height: 1.875rem;
    }

    ul {
        padding-left: 55px;
        padding-top: 30px;

        li {
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0px;
            }
        }
    }

`;



