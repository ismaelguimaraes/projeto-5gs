import React from 'react';
import {Footer, Info, RedesSociais} from './styles';
import {FaFacebook, FaCaretUp} from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

export default function FooterPage() {
    return (
        <Footer>
                <Info>
                    <a href="#">Fale Conosco</a>
                    <p>\</p>
                    <a href="#">Sobre nós</a>
                    <p>\</p>
                    <a href="#">Legal</a>
                </Info>

                <a href="/"><FaCaretUp size={25}/></a>

                <RedesSociais>
                    <a href="https:\\facebook.com" target="_blank"><FaFacebook size={25}/></a>
                    <a href="https://www.instagram.com/5g_sustentavel/" target="_blank" ><AiFillInstagram size={27}/></a>
                    <a href="instagram.com" target="_blank"><AiFillTwitterCircle size={27}/></a>
                </RedesSociais>
            </Footer>
    );
}
