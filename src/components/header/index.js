import React from 'react';
import { IoIosMenu } from 'react-icons/io'
import { FaLeaf,  } from 'react-icons/fa'

import { Headers } from './styles';

import logo from '../../assets/imagens/logo.png';

export default function Header() {

    return (
        <Headers id="menu">
            <img src={logo} alt="5GS-Logotipo" height={35}/>
            <div>
                <IoIosMenu size={35}/>
                <FaLeaf size={17} color="#4eb66a"/>
            </div>
        </Headers>
    );
}
