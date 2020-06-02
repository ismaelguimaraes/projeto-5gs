import React from 'react';
import {Footer, Info, RedesSociais} from './styles';
import {FaFacebook, FaCaretUp} from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

export default function FooterPage() {

    function top() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
    };

    return (
        <Footer>
                <Info>
                    <a href="/" title="Abre a página Fale conosco">Fale Conosco</a>
                    <p></p>
                    <a href="/"title="Abre a página sobre nós">Sobre nós</a>
                    <p></p>
                    <a href="/" title="Abre a página LEGAL">Legal</a>
                </Info>

                <section title="Volta ao topo"><FaCaretUp size={25} onClick={top}/></section>

                <RedesSociais>
                    <a href="https:\\facebook.com" target="_blank" rel="noopener noreferrer" title="Abre o facebook da 5GS"><FaFacebook size={25}/></a>
                    <a href="https://www.instagram.com/5g_sustentavel/" target="_blank" rel="noopener noreferrer" title="Abre o instagram da 5GS"><AiFillInstagram size={27}/></a>
                    <a href="instagram.com" target="_blank" rel="noopener noreferrer" title="Abre o twitter da 5GS"><AiFillTwitterCircle size={27}/></a>
                </RedesSociais>
            </Footer>
    );
}
