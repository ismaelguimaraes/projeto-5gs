import styled from 'styled-components';

export const Footer = styled.footer`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 10px;
    background: #000;
    color: #fff;
    align-items: center;
    justify-items: center;

    section {
        padding-top: 5px;
        cursor: pointer;

        &:hover {
            color: #0DC954;
        }
    }

`;

export const Info = styled.div`

    display: flex;
    font-family: 'Gilroy', sans-serif;

    a {
        color: #fff;

        &:hover {
            color: #0DC954;
        }
    }

    p {
        padding: 0 7px;

        &::after {
            content: "\\\\";
        }
    }
`;

export const RedesSociais = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 7px;
    align-items: center;
    padding-top: 5px;

    svg {
        color: #fff;

        &:hover {
            color: #0DC954;
        }
    }
`;
