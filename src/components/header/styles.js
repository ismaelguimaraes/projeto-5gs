import styled from 'styled-components';

export const Headers = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;

    width: 100vw;
    padding: 0px 100px;

    background: #000;
    color: #fff;
    z-index: 3;

    a {
        cursor: pointer;
    }

    @media (max-width: 750px){
        padding: 5px 50px;
    }
`;

export const Menu = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;
`;

export const NavIcon = styled.div`
    .ham {
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: transform 400ms;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;

        transform: ${props => (props.open ? "rotate(45deg)" : "0")};

        .line {
            fill:none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke:#fff;
            stroke-width: 6;
            stroke-linecap:round;
        }

        #top {
            stroke-dasharray: 40 139;
            stroke-dashoffset: ${props => (props.open ? "-98px" : "0")};
        }

        #bottom {
            stroke-dasharray: 40 180;
            stroke-dashoffset: ${props => (props.open ? "-138px" : "0")};
        }
    }

`;

export const Conteudo = styled.div`
    display: flex;
    position: fixed;
    z-index: -1;

    align-self: center;
    align-items: center;
    justify-content: center;

    transition: top 0.9s cubic-bezier(0.3, 0, 0, 1);
    overflow-y: scroll;

    top: ${props => (props.open ? "0%" : "-100%")};
    background: #000;
    height: 100vh;
    width: 100vw;
    list-style: none;

    ul {
        list-style: none;
        font-size: 3rem;
        text-align: center;

        li {
            padding: 30px 0;

            a {
                color: #fff;
                letter-spacing: 2px;
                font-family: "Bebas neue", cursive;

                &:hover {
                    transition: color 0.1s ease-in;
                    color: #10e660;
                }
            }
        }
    }

    @media(max-height: 420px) {
        align-items: flex-start;
    }
`;
