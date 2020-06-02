import styled from 'styled-components';

export const Headers = styled.header`
    position: fixed;
    display: flex;
    width: 100vw;
    padding: 7px 100px;
    background: #000;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    cursor: pointer;

    @media (max-width: 750px){
        padding: 10px 50px;
    }

`;
