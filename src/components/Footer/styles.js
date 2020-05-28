import styled from 'styled-components';

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
            color: #1eee70;
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
            color: #1eee70;
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
