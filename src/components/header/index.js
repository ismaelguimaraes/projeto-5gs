import React from 'react';
import { IoIosMenu } from 'react-icons/io';

import { Headers } from './styles';

import logo from '../../assets/imagens/logo.png';

export default function Header() {

    return (
        <>
        <Headers id="menu">
            <a href="/"><img src={logo} alt="5GS-Logotipo" height={35}/></a>
            <IoIosMenu size={35}/>
        </Headers>
        </>
    );
}
