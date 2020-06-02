import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Headers, Menu, Conteudo, NavIcon } from './styles';

import logo from '../../assets/imagens/logo.png';

export default function Header() {

    const [open, setOpen] = useState (false);

    function abrir() {
        const change = open ? false : true;
        document.body.style.overflowY = open ? "scroll" : "hidden";
        setOpen(change);
    }

    return (
        <>
            <Headers>
                <Menu>

                    <a href="/" onClick={() => console.log("Abrir")}><img src={logo} alt="5GS-Logotipo" height={35}/></a>

                    <NavIcon onClick={() => abrir()} open={open}>
                        <svg className="ham" viewBox="0 0 100 100" height={50}>
                            <path
                                    className="line"
                                    id="top"
                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path
                                    className="line"
                                    id="middle"
                                    d="m 30,50 h 40" />
                            <path
                                    className="line"
                                    id="bottom"
                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>
                    </NavIcon>

                </Menu>

                <Conteudo open={open}>
                    <ul>
                        <li><Link to="/" onClick={() => abrir()}>Inicio</Link></li>
                        <li><Link to="/informacoes" onClick={() => abrir()}>História</Link></li>
                        <li><Link to="/comparacao" onClick={() => abrir()}>Comparação</Link></li>
                        <li><Link to="/" onClick={() => abrir()}>Doação</Link></li>
                    </ul>
                </Conteudo>
            </Headers>
        </>
    );
}
